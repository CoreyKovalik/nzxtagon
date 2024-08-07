import NzxtPlugin from "plugins/NzxtPlugin";
import KrakenContainer from './containers/KrakenContainer';
import MockNzxtPlugin from 'plugins/MockNzxtPlugin';

const KrakenPage = () => {
  return (
    <>
    <NzxtPlugin />
    {import.meta.env.DEV && <MockNzxtPlugin />}
      <div style={{ fontSize: "2em", lineHeight: 1.1, fontWeight: "bold" }}>NZTAGON</div>
      <KrakenContainer />
    </>
  );
}

export default KrakenPage
