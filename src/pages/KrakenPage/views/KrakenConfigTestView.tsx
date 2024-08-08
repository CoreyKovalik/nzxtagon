import { FC } from "react";
import { ConfigurationTestColors } from "types/ConfigurationTestColors";

type KrakenConfigTestView = {
  value: ConfigurationTestColors | null;
}

const KrakenConfigTestView: FC<KrakenConfigTestView> = ({ value }) => {
  return (
    <div>
      <span>Selected Color: </span>
      {value ? (
        <span style={{ color: `${value}`, fontWeight: "bold" }}>{value}</span>
      ) : (
        <span>-</span>
      )}
    </div>
  );
}

export default KrakenConfigTestView
