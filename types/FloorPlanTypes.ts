import { set } from 'date-fns';
import { Dispatch, SetStateAction } from "react";


export interface FloorPlanEditorProps {
    rows: number;
    cols: number;
    boxes: Box[];
    selectedColor: string;
    setBoxes: Dispatch<React.SetStateAction<Box[]>>;
    isDrawing: boolean;
}
export interface LeftToolbarProps {
    setRows: Dispatch<SetStateAction<number>>;
    setCols: Dispatch<SetStateAction<number>>;
    setColor: Dispatch<SetStateAction<string>>;
    selectedColor: string;
    boxes: Box[];
    setBoxes: Dispatch<SetStateAction<Box[]>>;
    isDrawing: boolean;
    toggleDrawingMode: () => void;
}

export interface Box {
    id: string;
    config: BoxConfig; // Ensure this property is defined
}


export interface BoxConfig {
    id: string;
    itemNum: string;
    size: number;
    color: string;
    position: { x: number, y: number };
    cellPosition: { row: number, col: number };
    product?: string;
    department?: string;
    dragConstraints: { top: number, left: number, right: number, bottom: number };
    dragElastic: number;
    style?: React.CSSProperties;
}

export interface DraggableBoxProps {
    id: string;
    config: BoxConfig;
    setBoxes: Dispatch<SetStateAction<Box[]>>;
    onDragEnd: (boxId: string, newPosition: { x: number, y: number }, cellPosition: { row: number, col: number }) => void;
}

export interface BoxPopoverProps {
    boxConfig: BoxConfig;
    setBoxes: Dispatch<SetStateAction<Box[]>>;
    // onUpdateBox: (id: string, updatedFields: Partial<BoxConfig>) => void;
    close: () => void;
    isOpen: boolean;
}

export interface GridContextType {
    rows: number;
    setRows: Dispatch<SetStateAction<number>>;
    cols: number;
    setCols: Dispatch<SetStateAction<number>>;
    gridSize: number;
    setGridSize: Dispatch<SetStateAction<number>>;
    gridWidth: number;
    setGridWidth: Dispatch<SetStateAction<number>>;
    gridHeight: number;
    setGridHeight: Dispatch<SetStateAction<number>>;
    selectedColor: string;
    setSelectedColor: Dispatch<SetStateAction<string>>;
    boxes: Box[];
    setBoxes: Dispatch<SetStateAction<Box[]>>;
    isDrawing: boolean;
    setIsDrawing: Dispatch<SetStateAction<boolean>>;
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
    toggleDrawingMode: () => void;
    setNumColumns: Dispatch<SetStateAction<number>>;
    setNumRows: Dispatch<SetStateAction<number>>;
    numColumns: number;
    numRows: number;
  }