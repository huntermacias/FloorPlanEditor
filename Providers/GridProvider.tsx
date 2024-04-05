import React, { createContext, useContext, useEffect, useState } from 'react';
import { Box, GridContextType } from '@/types/FloorPlanTypes';

const GridContext = createContext<GridContextType | undefined>(undefined);

export const useGridContext = (): GridContextType => {
  const context = useContext(GridContext);
  if (context === undefined) {
    throw new Error('useGridContext must be used within a GridProvider');
  }
  return context;
};

interface GridProviderProps {
  children: React.ReactNode;
}

export const GridProvider: React.FC<GridProviderProps> = ({ children }) => {
  const gridContainerSize = 800;
  const [rows, setRows] = useState<number>(10);
  const [cols, setCols] = useState<number>(20);
  // Start gridSize calculation here to ensure it's updated as soon as rows or cols change
  const [gridSize, setGridSize] = useState<number>(gridContainerSize / Math.max(rows, cols));

  // Depend on gridSize for width and height to ensure consistency
  const [gridWidth, setGridWidth] = useState<number>(cols * gridSize);
  const [gridHeight, setGridHeight] = useState<number>(rows * gridSize);
  // Calculate numColumns and numRows based on the initial gridSize
  const [numColumns, setNumColumns] = useState<number>(Math.floor(gridWidth / gridSize));
  const [numRows, setNumRows] = useState<number>(Math.floor(gridHeight / gridSize));

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(true);
  const [color, setColor] = useState<string>('#3498db');

  const toggleDrawingMode = () => setIsDrawing(!isDrawing);

  useEffect(() => {
    const newGridSize = gridContainerSize / Math.max(rows, cols);
    setGridSize(newGridSize);
    // Recalculate gridWidth and gridHeight based on the new gridSize
    setGridWidth(cols * newGridSize);
    setGridHeight(rows * newGridSize);
    // Recalculate numColumns and numRows based directly on cols and rows
    setNumColumns(cols);
    setNumRows(rows);
  }, [cols, rows, gridSize]);

  const value: GridContextType = {
    gridSize, setGridSize,
    gridWidth, setGridWidth,
    gridHeight, setGridHeight,
    selectedColor, setSelectedColor,
    numColumns, setNumColumns,
    numRows, setNumRows,
    color, setColor,
    boxes, setBoxes,
    rows, setRows,
    cols, setCols,
    isDrawing, setIsDrawing,
    toggleDrawingMode,
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};
