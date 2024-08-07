import { useNzxtMonitoringStore } from 'store/monitoring';

const KrakenContainer = () => {
  const updateCount = useNzxtMonitoringStore((state) => state.updateCount);
  const lastUpdatedAt = useNzxtMonitoringStore((state) => state.lastUpdateAt);
  const cpu = useNzxtMonitoringStore((state) => state.cpu);
  const gpu = useNzxtMonitoringStore((state) => state.gpu);
  const ram = useNzxtMonitoringStore((state) => state.ram);
  const kraken = useNzxtMonitoringStore((state) => state.kraken);

  const info = {
    updateCount,
    lastUpdatedAt,
    cpu,
    gpu,
    ram,
    kraken,
  }
  return (
    <div style={{ whiteSpace: "pre", display: "flex", flexDirection: "column", rowGap: 10 }}>
      <span>{`Update Count: ${info.updateCount}`} {JSON.stringify(info.kraken, null)}</span>
      <div style={{ whiteSpace: "pre", display: "flex", fontSize: "small" }}>
        <span>CPU: {JSON.stringify(info.cpu, null, 1)}</span>
        <span>GPU: {JSON.stringify(info.gpu, null, 1)}</span>
        <span>RAM: {JSON.stringify(info.ram, null, 1)}</span>
      </div>
      </div>
  );
}

export default KrakenContainer
