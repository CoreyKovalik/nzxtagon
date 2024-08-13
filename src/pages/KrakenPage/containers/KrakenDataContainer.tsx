import useDebug from 'hooks/useDebug';
import { useNzxtMonitoringStore } from 'store/monitoring';

const KrakenDataContainer = () => {
  const updateCount = useNzxtMonitoringStore((state) => state.updateCount);
  const lastUpdatedAt = useNzxtMonitoringStore((state) => state.lastUpdateAt);
  const cpu = useNzxtMonitoringStore((state) => state.cpu);
  const gpu = useNzxtMonitoringStore((state) => state.gpu);
  const ram = useNzxtMonitoringStore((state) => state.ram);
  const kraken = useNzxtMonitoringStore((state) => state.kraken);
  const isDebug = useDebug();

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
      {isDebug && <span>Update Count: {info.updateCount}</span>}
      {/* @ts-expect-error: Marquee is deprecated but we're using it anyway 😈 */}
      <marquee
        // eslint-disable-next-line react/no-unknown-property
        scrollamount="3" behavior="scroll" direction="up"
        style={{ textAlign: "center", height: 250 }}
      >
        <div style={{ whiteSpace: "pre", display: "flex", flexDirection: "column", rowGap: 5 }}>
          <span>Liquid Temp: {info.kraken?.liquidTemperature}</span>
          {isDebug && <span><big>KRAKEN:</big> <br/> {JSON.stringify(window.nzxt?.v1, null, 1)}</span>}
          <span><big>CPU:</big> <br/> {JSON.stringify(info.cpu, null, 1)}</span>
          <span><big>GPU:</big> <br/> {JSON.stringify(info.gpu, null, 1)}</span>
          <span><big>RAM:</big> <br/> {JSON.stringify(info.ram, null, 1)}</span>
        </div>
      {/* @ts-expect-error: Marquee is deprecated but we're using it anyway 😈 */}
      </marquee>
    </>
  );
}

export default KrakenDataContainer
