import NzxtPlugin from "plugins/NzxtPlugin";
import KrakenContainer from './containers/KrakenContainer';
import MockNzxtPlugin from 'plugins/MockNzxtPlugin';
import KrakenConfigTestContainer from "./containers/KrakenConfigTestContainer";
import { useConfigurationTestStore } from "store/configurationTest";
import useQueryParam from "hooks/useQueryParam";

const KRAKEN_280_ELITE_DEFAULT_WIDTH_PX = 320;
const KRAKEN_280_ELITE_DEFAULT_HEIGHT_PX = 320;

const KrakenPage = () => {
  const enableConfigurationTest = useQueryParam("enableConfigurationTest");
  const color = useConfigurationTestStore((state) => state.color);
  const krakenWidth = window.nzxt?.v1?.width || KRAKEN_280_ELITE_DEFAULT_WIDTH_PX;
  const krakenHeight = window.nzxt?.v1?.height || KRAKEN_280_ELITE_DEFAULT_HEIGHT_PX;
  return (
    <>
    <NzxtPlugin />
    {import.meta.env.DEV && <MockNzxtPlugin />}
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: krakenWidth,
      height: krakenHeight,
      maxHeight: "100vh",
      boxSizing: "border-box",
      borderRadius: "50%",
      borderColor: !!enableConfigurationTest && color || "white",
      borderWidth: 5,
      borderStyle: "solid",
      padding: "20px 10px",
    }}>
      <span style={{ fontSize: "2em", lineHeight: 1.1, fontWeight: "bold" }}>NZTAGON</span>
      <KrakenConfigTestContainer />
      <KrakenContainer />
    </div>
    </>
  );
}

export default KrakenPage
