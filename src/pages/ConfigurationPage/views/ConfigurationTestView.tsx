import { FC } from "react";
import { ConfigurationTestColors } from "types/ConfigurationTestColors";

type ConfigurationTestViewProps = {
  value: ConfigurationTestColors | undefined;
  options: ConfigurationTestColors[];
  onClickOption: (value: ConfigurationTestColors) => void;
}

const ConfigurationTestView: FC<ConfigurationTestViewProps> = ({ value, options, onClickOption }) => (
  <div style={{ display: "flex", flexDirection: "column", rowGap: 25 }}>
    <span style={{ fontWeight: "bold" }}>[Config Test] Select a color below: </span>

    <div style={{ display: "flex", justifyContent: "center", columnGap: 25 }}>
      {options.map((option) => {
        const isSelected = option === value;
        return (
          <button
            key={option}
            onClick={() => onClickOption(option)}
            style={{
              fontWeight: "bold",
              color: isSelected ? "white" : option,
              borderColor: option,
              backgroundColor: isSelected ? option : undefined,
            }}
          >
            {option}
          </button>
        );
      }
      )}
    </div>
  </div>
)

export default ConfigurationTestView
