import { FC } from "react";
import { ConfigurationTestColors } from "types/ConfigurationTestColors";

type KrakenConfigTestView = {
  value: ConfigurationTestColors | undefined;
}

const KrakenConfigTestView: FC<KrakenConfigTestView> = ({ value }) => {
  return (
    <div>
      <span>ConfigurationTest: </span>
      {value ? (
        <span style={{ color: `${value}`, fontWeight: "bold" }}>{value}</span>
      ) : (
        <span>No Color Selected</span>
      )}
    </div>
  );
}

export default KrakenConfigTestView
