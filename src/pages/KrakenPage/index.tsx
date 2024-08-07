import NzxtPlugin from "plugins/NzxtPlugin";
import KrakenContainer from './containers/KrakenContainer';
import MockNzxtPlugin from 'plugins/MockNzxtPlugin';

const KrakenPage = () => {
  const krakenWidth = window.nzxt?.v1?.width;
  const krakenHeight = window.nzxt?.v1?.height;
  return (
    <>
    <NzxtPlugin />
    {import.meta.env.DEV && <MockNzxtPlugin />}
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: krakenWidth,
      height: krakenHeight,
      // maxHeight: "100vh",
    }}>
      <span style={{ fontSize: "2em", lineHeight: 1.1, fontWeight: "bold" }}>NZTAGON</span>
      <KrakenContainer />
    </div>
    </>
  );
}

export default KrakenPage
