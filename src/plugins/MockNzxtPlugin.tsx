import Chance from "chance";
import { time } from "constants";
import useDemo from "hooks/useDemo";
import { FC, useEffect } from "react"
import { NzxtMonitoringData, useNzxtMonitoringStore } from "store/monitoring";

const chance = new Chance();

type MockNzxtMonitoringData = Required<NzxtMonitoringData>;

const mockCpu = () => ({
  name: chance.word({ length: 6 }).toUpperCase() + " CPU",
  manufacturer: chance.pickone(["Intel", "AMD"]),
});

const mockGpu = () => ({
  name: chance.pickone(["NVIDIA", "AMD", "Intel", "Integrated Graphics"]) + " GPU",
});

const mockRam = () => ({
    modules: [
      {
        kind: chance.pickone(["DDR3", "DDR4", "DDR5"]), // RAM kind
        size: chance.integer({ min: 4096, max: 16384 }), // Size of RAM module in MB
        model: chance.word({ length: 6 }).toUpperCase() + " Model", // Model name
        frequency: chance.integer({ min: 2133, max: 3600 }), // Frequency in MHz
        stockFrequency: chance.integer({ min: 2133, max: 3600 }) // Stock frequency in MHz
      },
      {
        kind: chance.pickone(["DDR3", "DDR4", "DDR5"]), // RAM kind
        size: chance.integer({ min: 4096, max: 16384 }), // Size of RAM module in MB
        model: chance.word({ length: 6 }).toUpperCase() + " Model", // Model name
        frequency: chance.integer({ min: 2133, max: 3600 }), // Frequency in MHz
        stockFrequency: chance.integer({ min: 2133, max: 3600 }) // Stock frequency in MHz
      }
    ]
});

const mockMonitoringData = ({ gpu, cpu, ram }: {
  cpu: Pick<MockNzxtMonitoringData['cpu'], 'name' | 'manufacturer'>
  gpu: Pick<MockNzxtMonitoringData['gpu'], 'name'>
  ram: Pick<MockNzxtMonitoringData['ram'], 'modules'>
}): Required<NzxtMonitoringData> => ({
  cpu: {
    ...cpu,
    codeName: chance.word({ length: 10 }).toUpperCase(),
    socket: chance.word({ length: 8 }).toUpperCase(),
    load: chance.integer({ min: 0, max: 100 }), // CPU load as a percentage
    numCores: chance.integer({ min: 2, max: 16 }), // Number of cores
    numThreads: chance.integer({ min: 4, max: 32 }), // Number of threads
    temperature: chance.integer({ min: 30, max: 90 }), // Current temperature in Celsius
    minTemperature: chance.integer({ min: 30, max: 50 }), // Minimum temperature in Celsius
    maxTemperature: chance.integer({ min: 51, max: 90 }), // Maximum temperature in Celsius
    frequency: chance.integer({ min: 1000, max: 5000 }), // Current frequency in MHz
    minFrequency: chance.integer({ min: 1000, max: 2000 }), // Minimum frequency in MHz
    maxFrequency: chance.integer({ min: 2001, max: 5000 }), // Maximum frequency in MHz
    stockFrequency: chance.integer({ min: 1000, max: 5000 }), // Stock frequency in MHz
    fanSpeed: chance.integer({ min: 500, max: 3000 }), // Current fan speed in RPM
    minFanSpeed: chance.integer({ min: 500, max: 1000 }), // Minimum fan speed in RPM
    maxFanSpeed: chance.integer({ min: 1001, max: 3000 }), // Maximum fan speed in RPM
    tdp: chance.integer({ min: 35, max: 150 }), // Thermal Design Power in watts
    power: chance.integer({ min: 50, max: 200 }) // Power consumption in watts
  },
  gpu: {
    ...gpu,
    load: chance.integer({ min: 0, max: 100 }), // GPU load as a percentage
    temperature: chance.integer({ min: 40, max: 90 }), // Current temperature in Celsius
    minTemperature: chance.integer({ min: 40, max: 60 }), // Minimum temperature in Celsius
    maxTemperature: chance.integer({ min: 61, max: 90 }), // Maximum temperature in Celsius
    frequency: chance.integer({ min: 500, max: 2000 }), // Current frequency in MHz
    minFrequency: chance.integer({ min: 500, max: 1000 }), // Minimum frequency in MHz
    maxFrequency: chance.integer({ min: 1001, max: 2000 }), // Maximum frequency in MHz
    stockFrequency: chance.integer({ min: 500, max: 2000 }), // Stock frequency in MHz
    fanSpeed: chance.integer({ min: 500, max: 3000 }), // Current fan speed in RPM
    minFanSpeed: chance.integer({ min: 500, max: 1000 }), // Minimum fan speed in RPM
    maxFanSpeed: chance.integer({ min: 1001, max: 3000 }), // Maximum fan speed in RPM
    power: chance.integer({ min: 100, max: 300 }) // Power consumption in watts
  },
  kraken: {
    liquidTemperature: chance.integer({ min: 20, max: 40 }) // Liquid temperature in Celsius
  },
  ram: {
    ...ram,
    totalSize: chance.integer({ min: 4096, max: 32768 }), // Total size in MB
    inUse: chance.integer({ min: 1024, max: 32768 }), // Size in use in MB
  }
} satisfies Required<NzxtMonitoringData>)

const MockNzxtPlugin: FC = () => {
  const setMonitoringData = useNzxtMonitoringStore((state) => state.setMonitoringData);
  const isDemo = useDemo();

  const cpu = mockCpu();
  const gpu = mockGpu();
  const ram = mockRam();

  useEffect(() => {
    if (!isDemo && import.meta.env.PROD) {
      return;
    }

    const intervalId = setInterval(() => {
      const mocked = mockMonitoringData({ cpu, gpu, ram });
      setMonitoringData(mocked);
    }, time.oneSecondMs);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default MockNzxtPlugin
