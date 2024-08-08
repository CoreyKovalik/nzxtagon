import DevKrakenButtonContainer from "dev-only/DevKrakenButtonContainer";
import useQueryParam from "hooks/useQueryParam";
import ConfigurationPage from "pages/ConfigurationPage";
import KrakenPage from "pages/KrakenPage";

const AppRouter = () => {
  const krakenQueryParam = useQueryParam("kraken");
  const enableKrakenPage = krakenQueryParam === "1";
  const enableConfigurationPage = !enableKrakenPage;

  return (
    <>
      {import.meta.env.DEV && <DevKrakenButtonContainer />}
      {enableConfigurationPage && <ConfigurationPage />}
      {enableKrakenPage && <KrakenPage />}
    </>
  )
}

export default AppRouter
