import { ConfigurationTestColors } from 'types/ConfigurationTestColors';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type State = {
  color?: ConfigurationTestColors;
}

type Actions = {
  selectColor: (color: ConfigurationTestColors) => void;
}

type ConfigurationTestStore = State & Actions;

export const useConfigurationTestStore = create<ConfigurationTestStore>()(
  persist(
    (set, _get) => ({
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
