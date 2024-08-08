import useQueryParam from "hooks/useQueryParam"
import { ConfigurationTestColors } from "types/ConfigurationTestColors";
import ConfigurationTestView from "../views/ConfigurationTestView";
import { useConfigurationTestStore } from "store/configurationTest";

const options: ConfigurationTestColors[] = ["red", "green", "blue"];

/** This is available to test in production. Pass 'enableConfigurationTest' with any truthy value as a query param */
const ConfigurationTestContainer = () => {
  const color = useConfigurationTestStore((state) => state.color);
  const selectColor = useConfigurationTestStore((state) => state.selectColor);
  const enableConfigurationTest = useQueryParam("enableConfigurationTest");

  const handleClickOption = (value: ConfigurationTestColors) => selectColor(value);

  if (!enableConfigurationTest) {
    return null;
  }
  return (
    <ConfigurationTestView value={color} options={options} onClickOption={handleClickOption} onClickClear={() => selectColor(undefined)} />
  )
}

export default ConfigurationTestContainer
