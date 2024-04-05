import { FloorLayoutState } from '@/types/storeTypes';
import create from 'zustand';


export const useFloorLayoutStore = create<FloorLayoutState>(set => ({
    floorItems: [],
    addItem: (item) =>
      set(state => ({ floorItems: [...state.floorItems, item] })),
    removeItem: (itemId) =>
      set(state => ({
        floorItems: state.floorItems.filter(item => item.id !== itemId)
      })),
    // more actions
  }));