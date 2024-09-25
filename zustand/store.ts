import { create } from "zustand";
export const item = create((set)=>({
    items: 0,
    increase: () => set((state: { items: number; }) => ({items : state.items + 1})),
    decrease: () => set((state: { items: number; }) => ({items : state.items - 1}))
}))
