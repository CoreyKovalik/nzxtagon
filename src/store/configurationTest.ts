import { ConfigurationTestColors } from 'types/ConfigurationTestColors';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type State = {
  color: ConfigurationTestColors | null;
}

type Actions = {
  selectColor: (color: ConfigurationTestColors | null) => void;
}

type ConfigurationTestStore = State & Actions;

export const useConfigurationTestStore = create<ConfigurationTestStore>()(
  persist(
    (set, _get) => ({
      color: null,
      selectColor: (color) => set((state) => ({...state, color })),
    }),
    {
      name: 'configuration-test-store', // name of item in the storage (must be unique)
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state): Partial<State> => ({ color: state.color }),
    },
  ),
)
