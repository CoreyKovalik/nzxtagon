import ConfigurationPage from "pages/ConfigurationPage";
import KrakenPage from "pages/KrakenPage";

const AppRouter = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const enableKrakenPage = searchParams.get("kraken") === "1";
  const enableConfigurationPage = !enableKrakenPage;
  return (
    <>
      {enableConfigurationPage && <ConfigurationPage />}
      {enableKrakenPage && <KrakenPage />}
    </>
  )
}

export default AppRouter