import { CPU } from 'types/CPU';
import { GPU } from 'types/GPU';
import { KrakenMetadata } from 'types/KrakenMetadata';
import { RAM } from 'types/RAM';
import { create } from 'zustand'

type NzxtMonitoringData = {
  cpu?: CPU;
  gpu?: GPU;
  ram?: RAM;
  kraken?: KrakenMetadata;
}

type NzxtMonitoringStoreState = NzxtMonitoringData & {
  updateCount: number;
  lastUpdateAt?: number;
}

type NzxtMonitoringStoreActions = {
  setMonitoringData: (state: NzxtMonitoringData) => void;
}

type NzxtMonitoringStore = NzxtMonitoringStoreState & NzxtMonitoringStoreActions

export const useNzxtMonitoringStore = create<NzxtMonitoringStore>((set) => ({
  updateCount: 0,
  setMonitoringData: (monitoringData) => set((state) => ({
    ...monitoringData,
    updateCount: state.updateCount + 1,
    lastUpdateAt: Date.now(),
  })),
}))
