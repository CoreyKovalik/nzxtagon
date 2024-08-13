import { FC, useEffect } from "react"
import { useNzxtMonitoringStore } from "store/monitoring";

import { MonitoringData } from "@nzxt/web-integrations-types/v1";
import useDemo from "hooks/useDemo";

const getSingleCpu = (data: MonitoringData) => {
  const cpus = data.cpus;
  return cpus && cpus.length ? cpus[0] : undefined;
}

const getSingleGpu = (data: MonitoringData) => data.gpus.find((gpu, index, gpus) => {
  /**
   * Credit to Bruno Andrade @see https://github.com/brunoandradebr/nzxt/blob/bdaaa5f9cf35fdd9c11fed08836f928d868a59ca/src/hooks/useMonitoring/index.tsx#L28
   * @summary Seems like it's posssible to have multiple results GPUs. Not sure why we're checking for 'Graphics' specifically, but I want to get this working to test on my Kraken.
   */
  const cardNameTarget = 'Graphics';
  if (gpus.length > 1 && gpus.some((gpu) => gpu.name.includes(cardNameTarget))) {
    return gpu.name.includes(cardNameTarget);
  }
  return index === 0;
});

const NzxtPlugin: FC = () => {
  const setMonitoringData = useNzxtMonitoringStore((state) => state.setMonitoringData);
  const isDemo = useDemo();

  useEffect(() => {
    if (isDemo) {
      return;
    }

    window.nzxt = {
      v1: {
        // NZXT CAM will call this function once a second with updated monitoring data.
        onMonitoringDataUpdate: (data: MonitoringData) => {
          setMonitoringData({
            cpu: getSingleCpu(data),
            gpu: getSingleGpu(data),
            ram: data.ram,
            kraken: data.kraken,
          });
        },
        // Display Dimensions
        height: window.nzxt?.v1?.height ?? 0,
        width: window.nzxt?.v1?.width ?? 0,
        // Shape of the display
        shape: window.nzxt?.v1?.shape ?? "circle",
        targetFps: window.nzxt?.v1?.targetFps ?? 30,
  },
};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default NzxtPlugin
