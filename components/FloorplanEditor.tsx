'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import DraggableBox from './DraggableBox';
import { generateGridLines } from '@/lib/generateGridLines';
import { v4 as uuidv4 } from 'uuid';
import { useGridContext } from "@/Providers/GridProvider";
import throttle from 'lodash/throttle';



const FloorPlanEditor = () => {
    const {
        boxes,
        selectedColor,
        setBoxes,
        isDrawing,
        numColumns,
        numRows,
        gridSize,
        gridWidth,
        gridHeight
    } = useGridContext();

    const floorPlanRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);

    // default box configuration
    const boxConfig = {
        id: '',
        config: {
            itemNum: '',
            size: gridSize - 4,
            color: 'rgba(100, 100, 255, 0.7)', // A softer, theme-aligned default color
            dragConstraints: { left: 0, right: gridWidth - gridSize, top: 0, bottom: gridHeight - gridSize },
            dragElastic: 0.2, // A bit more elasticity for a smoother feel
            position: { x: 0, y: 0 },
            product: '',
            department: '',
            cellPosition: { row: 0, col: 0 },
            style: {},
        }
    };

    const handleAddBox = (clientX: number, clientY: number) => {
        const gridRect = floorPlanRef.current?.getBoundingClientRect();
        if (!gridRect) return;

        const x = clientX - gridRect.left;
        const y = clientY - gridRect.top;

        if (x < 0 || y < 0 || x >= gridRect.width || y >= gridRect.height) return;

        const gridX = Math.floor(x / gridSize) * gridSize;
        const gridY = Math.floor(y / gridSize) * gridSize;

        const isPositionOccupied = boxes.some(box =>
            box.config.position.x === gridX && box.config.position.y === gridY
        );
        if (isPositionOccupied) return;

        const newBoxId = `box-${uuidv4()}`;
        const newBox = {
            id: newBoxId,
            config: {
                id: newBoxId,
                itemNum: `item-${Date.now()}`,
                product: `product-${Date.now()}`,
                department: `department-${Date.now()}`,
                position: { x: gridX, y: gridY },
                cellPosition: { row: Math.floor(gridY / gridSize), col: Math.floor(gridX / gridSize) },
                color: selectedColor || boxConfig.config.color,
                size: boxConfig.config.size,
                dragConstraints: boxConfig.config.dragConstraints,
                dragElastic: boxConfig.config.dragElastic,

            }
        };

        setBoxes([...boxes, newBox]);
    };


    const handleAddBoxThrottled = useCallback(throttle((clientX, clientY) => {
        const gridRect = floorPlanRef.current?.getBoundingClientRect();
        
        const x = clientX - gridRect!.left;
        const y = clientY - gridRect!.top;
        const gridX = Math.floor(x / gridSize) * gridSize;
        const gridY = Math.floor(y / gridSize) * gridSize;
        if (!gridRect || x < 0 || y < 0 || x >= gridRect.width || y >= gridRect.height) return;

        if (boxes.some(box => box.config.position.x === gridX && box.config.position.y === gridY)) return;


        setBoxes(prev => [...prev, {
            
            id: `box-${uuidv4()}`,
            
            config: {
                id: `box-${uuidv4()}`,
                itemNum: `item-${Date.now()}`,
                product: `product-${Date.now()}`,
                department: `department-${Date.now()}`,
                position: { x: gridX, y: gridY },
                cellPosition: { row: Math.floor(gridY / gridSize), col: Math.floor(gridX / gridSize) },
                color: selectedColor || boxConfig.config.color,
                size: boxConfig.config.size,
                dragConstraints: boxConfig.config.dragConstraints,
                dragElastic: boxConfig.config.dragElastic,

            }
        }]);
    }, 500), [boxes, gridSize, gridWidth, gridHeight]);

    // Handler to start drawing
    const handleMouseDown = (event: any) => {
        if (!isDrawing) return;
        setIsMouseDown(true);
        const offsetX = event.clientX;
        const offsetY = event.clientY;
        handleAddBox(offsetX, offsetY);
        // handleAddBoxThrottled(offsetX, offsetY);
    };


    const handleDragEnd = (boxId: string, newPosition: { x: number, y: number }) => {

        const gridRect = floorPlanRef.current?.getBoundingClientRect();
        if (!gridRect) return;

        const relativeX = newPosition.x - gridRect.left;
        const relativeY = newPosition.y - gridRect.top;

        const cellX = Math.floor(relativeX / gridSize);
        const cellY = Math.floor(relativeY / gridSize);

        const snapX = cellX * gridSize;
        const snapY = cellY * gridSize;

        setBoxes(boxes.map(box => box.id === boxId ? {
            ...box,
            config: {
                ...box.config,
                position: { x: snapX, y: snapY },
                cellPosition: { row: cellY, col: cellX },
            },
        } : box));
    };

    useEffect(() => {
        // Early return if not in drawing mode or mouse is not down, avoids deeper nesting
        if (!isDrawing || !isMouseDown) return;

        const mouseMoveHandler = (event: MouseEvent) => {
            // Directly call handleAddBox without intermediate variables
            handleAddBox(event.clientX, event.clientY);
            // handleAddBoxThrottled(event.clientX, event.clientY);
        };

        // Simplify event listener setup and teardown
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', () => setIsMouseDown(false), { once: true });

        // Cleanup function to remove event listeners
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            // No need to remove the mouseup listener due to the { once: true } option
        };
    }, [isDrawing, isMouseDown, handleAddBox]);

    useEffect(() => {
        setBoxes(boxes);
    }, [boxes]);

    useEffect(() => {
        const adjustBoxesForGridSize = () => {
            // Determine if the adjustment is necessary to avoid infinite loops
            const needsAdjustment = boxes.some(box => box.config.size !== gridSize - 4);
            if (!needsAdjustment) return;

            const updatedBoxes = boxes.map(box => {
                const newSize = gridSize - 4;
                const newPosition = {
                    x: Math.round((box.config.position.x / box.config.size) * newSize),
                    y: Math.round((box.config.position.y / box.config.size) * newSize)
                };


                return {
                    ...box,
                    config: {
                        ...box.config,
                        size: newSize,
                        position: newPosition
                    }
                };
            });

            // create variable of all new boxes that are within grid constraints and set them
            const newBoxes = updatedBoxes.filter(box => {
                const { x, y } = box.config.position;
                return x >= 0 && x + box.config.size <= gridWidth && y >= 0 && y + box.config.size <= gridHeight;
            });

            setBoxes(newBoxes);
        };

        adjustBoxesForGridSize();
    }, [gridSize, boxes, gridHeight, gridWidth]);


    return (
        <div
            className="relative flex justify-center items-center w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden shadow-xl"
            style={{ width: `${gridWidth}px`, height: `${gridHeight}px` }}
            onMouseDown={handleMouseDown}
        >
            <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${numColumns}, ${gridSize}px)`, gridTemplateRows: `repeat(${numRows}, ${gridSize}px)` }}>
                {generateGridLines({ numColumns, numRows, gridSize })}
            </div>
            <div className="absolute inset-0" ref={floorPlanRef} onMouseDown={handleMouseDown}>
                {boxes.map(box => (
                    <DraggableBox
                        key={box.id}
                        id={box.id}
                        config={box.config}
                        setBoxes={setBoxes}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </div>
        </div>

    );


};

export default FloorPlanEditor;
