import { useEffect } from 'react';
import Chance from "chance";

const chance = new Chance();

const CacheBusterPlugin = () => {
  useEffect(() => {
    const guidv5 = chance.guid();
    const url = new URL(window.location.href);
    url.searchParams.set('no-cache', guidv5);
    window.history.replaceState({}, '', url.toString());
  }, []);

  return null;
};

export default CacheBusterPlugin;
