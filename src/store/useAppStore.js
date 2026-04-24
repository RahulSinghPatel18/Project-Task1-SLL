import { create } from "zustand";


const useAppStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => ({
      count: state.count > 0 ? state.count - 1 : 0,
    })),

  name: "Rahul",
  setName: (name) => set({ name }),

  company: "Vizualytic",
  year: 2025,
  setCompany: (company) => set({ company }),
  setYear: (year) => set({ year }),
}));

export default useAppStore;