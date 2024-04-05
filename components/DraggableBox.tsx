import { motion } from 'framer-motion';
import { useState } from 'react';
import { BoxPopover } from './BoxPopover';
import { DraggableBoxProps } from '@/types/FloorPlanTypes';

const DraggableBox: React.FC<DraggableBoxProps> = ({
    id, config, onDragEnd, setBoxes
}) => {
    const { size, color, position, dragConstraints, dragElastic } = config;
    const [showPopover, setShowPopover] = useState(false);

    // Determine if color is a gradient for background style
    const isGradient = color.includes('gradient');
    const backgroundStyle = isGradient ? { backgroundImage: color } : { backgroundColor: color };

    // Handler for right-click to show popover
    const handleRightClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPopover(true);
    };

    // Handler to close popover
    const handleClose = () => setShowPopover(false);

    return (
        <>
            <motion.div
                className="box-class"
                onContextMenu={handleRightClick}
                drag
                dragConstraints={{
                    top: dragConstraints.top,
                    left: dragConstraints.left,
                    right: dragConstraints.right - size,
                    bottom: dragConstraints.bottom - size,
                }}
                dragTransition={{ power: 0, timeConstant: 0 }}
                onDragEnd={(event, info) => onDragEnd(id, info.point, { row: info.offset.x, col: info.offset.y })}
                dragElastic={dragElastic}
                layout
                animate={{ x: position.x, y: position.y }} // Apply position using animate
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                whileHover={{ scale: 1.05, cursor: 'grab' }} // Subtle scale on hover and change cursor
                whileDrag={{
                    scale: 1.15,
                    boxShadow: "0px 10px 15px rgba(255,255,255,0.3)", // Enhanced shadow for a "lifted" effect
                    cursor: 'grabbing' // Change cursor to grabbing during drag
                }}
                style={{
                    position: "absolute",
                    width: size,
                    height: size,
                    borderRadius: '10px', // More pronounced rounded corners
                    border: '1px solid rgba(255,255,255,0.4)', // Optional: add a subtle border
                    ...backgroundStyle, // Apply dynamic background style
                }}
            />
            {showPopover && (
                <BoxPopover
                    boxConfig={{ ...config }}
                    isOpen={showPopover}
                    close={handleClose}
                    setBoxes={setBoxes}
                />
            )}

        </>
    );
};

export default DraggableBox;
