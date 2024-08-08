import { useEffect } from 'react'
import { useConfigurationTestStore } from 'store/configurationTest';

/** @todo move this to something shared for store names so the store names are referenced */
const storesToListenTo = ['configuration-test-store'];

const KrakenStorageCommunicationPlugin = () => {
  useEffect(() => {
    const handleKrakenChange = (event: StorageEvent) => {
      if (event.key && storesToListenTo.includes(event.key)) {
        useConfigurationTestStore.persist.rehydrate();
      }
    }

    window.addEventListener('storage', handleKrakenChange)

    return () => window.removeEventListener('storage', handleKrakenChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null;
}

export default KrakenStorageCommunicationPlugin
