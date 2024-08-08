import useQueryParam from "hooks/useQueryParam";
import ConfigTestView from "../views/KrakenConfigTestView";
import { useConfigurationTestStore } from "store/configurationTest";

const KrakenConfigTestContainer = () => {
  const enableConfigurationTest = useQueryParam("enableConfigurationTest");
  const color = useConfigurationTestStore((state) => state.color);

  if (!enableConfigurationTest) {
    return null;
  }
  return <ConfigTestView value={color} />;
}

export default KrakenConfigTestContainer
