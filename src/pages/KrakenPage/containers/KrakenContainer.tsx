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
    <>
    <span>{`Update Count: ${info.updateCount}`}</span>
    {/* @ts-expect-error: Oh yeah, we're using marquee */}
    <marquee
      // eslint-disable-next-line react/no-unknown-property
      scrollamount="2" behavior="scroll" direction="up"
      style={{ textAlign: "center" }}
    >
      <div style={{ whiteSpace: "pre", display: "flex", flexDirection: "column", rowGap: 5 }}>
        <span>{JSON.stringify(info.kraken, null, 0)}</span>
        <span><big>KRAKEN:</big> <br/> {JSON.stringify(window.nzxt?.v1, null, 1)}</span>
        <span><big>CPU:</big> <br/> {JSON.stringify(info.cpu, null, 1)}</span>
        <span><big>GPU:</big> <br/> {JSON.stringify(info.gpu, null, 1)}</span>
        <span><big>RAM:</big> <br/> {JSON.stringify(info.ram, null, 1)}</span>
      </div>
    {/* @ts-expect-error: Oh yeah, we're using marquee */}
    </marquee>
    </>
  );
}

export default KrakenContainer