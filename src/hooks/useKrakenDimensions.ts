import { Shape } from "@nzxt/web-integrations-types/v1";

const KRAKEN_280_ELITE_DEFAULT_WIDTH_PX = 320;
const KRAKEN_280_ELITE_DEFAULT_HEIGHT_PX = 320;
const KRAKEN_280_ELITE_DEFAULT_SHAPE: Shape = 'circle';

const useKrakenDimensions = () => {
  const krakenWidth = window.nzxt?.v1?.width || KRAKEN_280_ELITE_DEFAULT_WIDTH_PX;
  const krakenHeight = window.nzxt?.v1?.height || KRAKEN_280_ELITE_DEFAULT_HEIGHT_PX;
  const shape = window.nzxt?.v1?.shape || KRAKEN_280_ELITE_DEFAULT_SHAPE;

  return {
    krakenWidth,
    krakenHeight,
    shape,
  };
}

export default useKrakenDimensions
