export interface Item {
    id: string;
    name: string;
    size: number;
    description?: string;
    price?: string;
    imageUrl?: string;
  }
  
  export interface Aisle {
    id: string;
    name: string;
    items: Item[];
  
  }
  
  export interface StoreLayout {
    aisles: Aisle[];
    // Additional properties might include store name, address, map version, etc.
  }

export interface PathFinderProps {
    selectedProducts: string[]; // Assuming product IDs are strings
    layout: StoreLayout;
  }

  // Define a type for your state
export interface FloorLayoutState {
  floorItems: Array<FloorItem>;
  addItem: (item: FloorItem) => void;
  removeItem: (itemId: string) => void;
  // more state and actions
}

// Define a type for your floor item
export interface FloorItem {
  id: string;
  type: string;
  width: number;
  height: number;
  x: number;
  y: number;
  // more properties
}