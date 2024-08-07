import ConfigurationPage from "pages/ConfigurationPage";
import KrakenPage from "pages/KrakenPage";

const AppRouter = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const kraken = searchParams.get("kraken") === "1";
  const configurationPage = !kraken;
  return (
    <>
      {kraken && <KrakenPage />}
      {configurationPage && <ConfigurationPage />}
    </>
  )
}

export default AppRouter
