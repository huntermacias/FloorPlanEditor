import { StoreLayout } from "@/types/storeTypes";

export const costcoLayout: StoreLayout = {
    aisles: [
      {
        id: 'aisle-1',
        name: 'Electronics',
        items: [
          { id: '1001', name: 'Big Screen Televisions', size: 3, description: 'Latest 4K and 8K models', price: '$899 - $2999', imageUrl: '/images/tvs.png' },
          { id: '1002', name: 'Cameras', size: 1, description: 'Digital cameras and DSLRs', price: '$150 - $500', imageUrl: '/images/cameras.png' },
          { id: '1003', name: 'Sound Systems', size: 2, description: 'Home audio systems with surround sound', price: '$250 - $800', imageUrl: '/images/sound-systems.png' },
          { id: '1004', name: 'Laptops', size: 3, description: 'High-performance laptops for gaming and work', price: '$500 - $2500', imageUrl: '/images/laptops.png' },
          { id: '1005', name: 'Smartphones', size: 2, description: 'Latest models from top brands', price: '$400 - $1200', imageUrl: '/images/smartphones.png' },
          { id: '1006', name: 'Tablets', size: 2, description: 'For work, play, and everything in between', price: '$200 - $1000', imageUrl: '/images/tablets.png' },
          { id: '1007', name: 'Wearable Tech', size: 1, description: 'Smartwatches and fitness trackers', price: '$50 - $350', imageUrl: '/images/wearable-tech.png' },
          { id: '1008', name: 'Drones', size: 2, description: 'For aerial photography and fun', price: '$100 - $1000', imageUrl: '/images/drones.png' },
        ],
      },
      {
        id: 'aisle-2',
        name: 'Electronics Accessories',
        items: [
          { id: '2001', name: 'TV Mounts', size: 1, description: 'Sturdy and easy to install', price: '$25-$150', imageUrl: '/images/tv-mounts.jpg' },
          { id: '2002', name: 'Remote Controls', size: 1, description: 'Universal remotes for all your devices', price: '$15-$100', imageUrl: '/images/remotes.jpg' },
          { id: '2003', name: 'Gaming Consoles', size: 2, description: 'PS5, Xbox Series X, and more', price: '$300-$500', imageUrl: '/images/consoles.jpg' },
          { id: '2004', name: 'Charging Stations', size: 1, description: 'Keep your devices powered', price: '$20-$150', imageUrl: '/images/charging-stations.jpg' },
        ],
      },
      {
        id: 'aisle-3',
        name: 'Home Appliances',
        items: [
          { id: '101', name: 'Refrigerators', size: 2, description: 'Energy-efficient models available', price: '$600-$2500', imageUrl: '/images/fridges.jpg' },
          { id: '102', name: 'Microwave Ovens', size: 1, description: 'Quick and convenient cooking', price: '$50-$400', imageUrl: '/images/microwaves.jpg' },
          { id: '103', name: 'Washing Machines', size: 2, description: 'Front and top loading machines', price: '$400-$1500', imageUrl: '/images/washing-machines.jpg' },
          { id: '104', name: 'Dryers', size: 2, description: 'Efficient and large capacity', price: '$400-$1500', imageUrl: '/images/dryers.jpg' },
          { id: '105', name: 'Dishwashers', size: 1, description: 'Save time and water', price: '$250-$1200', imageUrl: '/images/dishwashers.jpg' },
          { id: '106', name: 'Cooktops', size: 1, description: 'Gas, electric, and induction cooktops', price: '$100-$2000', imageUrl: '/images/cooktops.jpg' },
          { id: '107', name: 'Wall Ovens', size: 2, description: 'Convection and traditional models', price: '$500-$3000', imageUrl: '/images/wall-ovens.jpg' },
          { id: '108', name: 'Range Hoods', size: 1, description: 'Keep your kitchen air clean', price: '$100-$800', imageUrl: '/images/range-hoods.jpg' },
        ],
      },
      {
        id: 'aisle-4',
        name: 'Back Centers',
        items: [
          { id: '101', name: 'Refrigerators', size: 2, description: 'Energy-efficient models available', price: '$600-$2500', imageUrl: '/images/fridges.jpg' },
          { id: '102', name: 'Microwave Ovens', size: 1, description: 'Quick and convenient cooking', price: '$50-$400', imageUrl: '/images/microwaves.jpg' },
          { id: '103', name: 'Washing Machines', size: 2, description: 'Front and top loading machines', price: '$400-$1500', imageUrl: '/images/washing-machines.jpg' },
          { id: '104', name: 'Dryers', size: 2, description: 'Efficient and large capacity', price: '$400-$1500', imageUrl: '/images/dryers.jpg' },
          { id: '105', name: 'Dishwashers', size: 1, description: 'Save time and water', price: '$250-$1200', imageUrl: '/images/dishwashers.jpg' },
          { id: '106', name: 'Cooktops', size: 1, description: 'Gas, electric, and induction cooktops', price: '$100-$2000', imageUrl: '/images/cooktops.jpg' },
          { id: '107', name: 'Wall Ovens', size: 2, description: 'Convection and traditional models', price: '$500-$3000', imageUrl: '/images/wall-ovens.jpg' },
          { id: '108', name: 'Range Hoods', size: 1, description: 'Keep your kitchen air clean', price: '$100-$800', imageUrl: '/images/range-hoods.jpg' },
        ],
      },
      {
        id: 'aisle-5',
        name: 'Foods',
        items: [
          { id: '101', name: 'Refrigerators', size: 2, description: 'Energy-efficient models available', price: '$600-$2500', imageUrl: '/images/fridges.jpg' },
          { id: '102', name: 'Microwave Ovens', size: 1, description: 'Quick and convenient cooking', price: '$50-$400', imageUrl: '/images/microwaves.jpg' },
          { id: '103', name: 'Washing Machines', size: 2, description: 'Front and top loading machines', price: '$400-$1500', imageUrl: '/images/washing-machines.jpg' },
          { id: '104', name: 'Dryers', size: 2, description: 'Efficient and large capacity', price: '$400-$1500', imageUrl: '/images/dryers.jpg' },
          { id: '105', name: 'Dishwashers', size: 1, description: 'Save time and water', price: '$250-$1200', imageUrl: '/images/dishwashers.jpg' },
          { id: '106', name: 'Cooktops', size: 1, description: 'Gas, electric, and induction cooktops', price: '$100-$2000', imageUrl: '/images/cooktops.jpg' },
          { id: '107', name: 'Wall Ovens', size: 2, description: 'Convection and traditional models', price: '$500-$3000', imageUrl: '/images/wall-ovens.jpg' },
          { id: '108', name: 'Range Hoods', size: 1, description: 'Keep your kitchen air clean', price: '$100-$800', imageUrl: '/images/range-hoods.jpg' },
        ],
      },
    ],
  };
  