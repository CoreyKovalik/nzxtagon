import { CSSProperties, FC, ReactNode } from "react";

import NzxtPlugin from "plugins/NzxtPlugin";
import KrakenDataContainer from "./containers/KrakenDataContainer";
import MockNzxtPlugin from 'plugins/MockNzxtPlugin';
import { useConfigurationTestStore } from "store/configurationTest";
import KrakenStorageCommunicationPlugin from "plugins/KrakenStorageCommunicationPlugin";
import useQueryParam from "hooks/useQueryParam";

import krakenStyles from './kraken.module.css'
import useKrakenDimensions from "hooks/useKrakenDimensions";
import KrakenConfigTestContainer from "./containers/KrakenConfigTestContainer";
import useDemo from "hooks/useDemo";
import useDebug from "hooks/useDebug";
import { Shape } from "@nzxt/web-integrations-types/v1";
import NzxtagonView from "./views/NzxtagonView";

const KrakenPage = () => {
  const enableConfigurationTest = useQueryParam("enableConfigurationTest");
  const isDemo = useDemo();
  const isDebug = useDebug();
  const color = useConfigurationTestStore((state) => state.color);
  const { krakenWidth, krakenHeight, shape } = useKrakenDimensions();
  const enableNzxt = import.meta.env.PROD && !isDemo;
  return (
    <>
    {enableNzxt ? <NzxtPlugin /> : <MockNzxtPlugin />}
    <KrakenStorageCommunicationPlugin />
    <KrakenDisplay
      width={krakenWidth}
      height={krakenHeight}
      borderColor={!!enableConfigurationTest && color || "white"}
      shape={shape}
    >
      <NzxtagonView />
      {isDebug && <KrakenConfigTestContainer />}
      <KrakenDataContainer />
    </KrakenDisplay>
    </>
  );
}

export default KrakenPage

const KrakenDisplay: FC<{
  children: ReactNode;
  width: number;
  height: number;
  shape: Shape;
  borderColor?: CSSProperties['borderColor'];
}> = ({ children, width, height, shape, borderColor }) => {
  if (shape === "circle") {
    return (
      <div className={krakenStyles.wrapper} style={{ width, height, borderColor }}>
        <div className={krakenStyles.container}>
          <span className={krakenStyles.content}>
            {children}
          </span>
        </div>
      </div>
    );
  }

  if (shape === "square") {
    return (
      <div className={krakenStyles.square} style={{ width, height, borderColor }}>
        {children}
      </div>
    );
  }

  return null;
}
