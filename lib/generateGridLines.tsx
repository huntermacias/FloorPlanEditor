import { motion } from 'framer-motion';

interface IGenerateGridLines {
  numColumns: number;
  numRows: number;
  gridSize: number;
}

export const generateGridLines = ({ numColumns, numRows, gridSize }: IGenerateGridLines) => {
  const lines = [];
  // Subtle animation for professional look
  const lineAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.1 }, // Reduced opacity for subtlety
  };

  // Using CSS variables for color and thickness for easy theming
  const lineStyle = `var(--grid-line-color, #dcdcdc)`; // Default light grey, easy to override
  const lineThickness = `var(--grid-line-thickness, 1px)`; // Default 1px, easy to override

  for (let i = 0; i < numColumns + 1; i++) {
    lines.push(
      <motion.div
        key={`v-${i}`}
        className="absolute bg-current left-0 w-[1px] h-full"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: i * 0.02 }}
        variants={lineAnimation}
        style={{
          transform: `translateX(${i * gridSize}px)`,
          backgroundColor: lineStyle,
          width: lineThickness,
        }}
      />
    );
  }

  for (let i = 0; i < numRows + 1; i++) {
    lines.push(
      <motion.div
        key={`h-${i}`}
        className="absolute bg-current top-0 h-[1px] w-full"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: i * 0.05 }}
        variants={lineAnimation}
        style={{
          transform: `translateY(${i * gridSize}px)`,
          backgroundColor: lineStyle,
          height: lineThickness,
        }}
      />
    );
  }

  return lines;
};
