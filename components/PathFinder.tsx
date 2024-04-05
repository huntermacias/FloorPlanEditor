// PathFinder.js
import { PathFinderProps } from '@/types/storeTypes';
import React from 'react';



  
  const PathFinder: React.FC<PathFinderProps> = ({ selectedProducts, layout }) => {
    const getPathThroughAisles = (): string[] => {
      const aisleOrder: string[] = [];
      selectedProducts.forEach(productId => {
        // Find which aisle this product is in
        const foundAisle = layout.aisles.find(aisle =>
          aisle.items.some(item => item.id === productId));
        if (foundAisle && !aisleOrder.includes(foundAisle.id)) {
          aisleOrder.push(foundAisle.id);
        }
      });
      return aisleOrder;
    };
  
    const aisleOrder = getPathThroughAisles();
  
    return (
      <div className="text-white">
        <h2 className="text-lg font-bold">Path Through Store:</h2>
        <ol className="list-decimal ml-4">
          {aisleOrder.map(aisleId => (
            <li key={aisleId}>
              Visit {layout.aisles.find(aisle => aisle.id === aisleId)?.name}
            </li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default PathFinder;