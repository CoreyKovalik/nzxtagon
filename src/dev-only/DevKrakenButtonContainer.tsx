import useQueryParam from "hooks/useQueryParam";

const DevKrakenButtonContainer = () => {
  const krakenQueryParam = useQueryParam("kraken");
  const nextQueryParam = krakenQueryParam === "1" ? "0" : "1";

  const handleSetKrakenQueryParam = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('kraken', nextQueryParam);
    window.history.pushState({}, '', url.toString());
  }

  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <div style={{ position: "fixed", bottom: 0, zIndex: 99 }}>
      <button onClick={handleSetKrakenQueryParam} style={{ padding: 0 }}>
        {`kraken=${nextQueryParam}`}
      </button>
    </div>
  );
}

export default DevKrakenButtonContainer;
