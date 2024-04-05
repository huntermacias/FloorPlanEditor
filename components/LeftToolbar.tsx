'use client';
import React from 'react';
import { Label } from './ui/label';
import { Slider } from "@/components/ui/slider";
import { Button } from './ui/button';
import { DatePicker } from './ui/date-picker';
import { PaintBucketIcon, PlusIcon, SaveIcon, SettingsIcon, Trash2Icon } from 'lucide-react';
import { Switch } from './ui/switch';
import ColorPicker from './MyPicker';
import { useGridContext } from "@/Providers/GridProvider";
import { Input } from './ui/input';

const customColors = [
  'linear-gradient(135deg, #1c92d2 0%, #f2fcfe 100%)', // Sparkling Blue
  'linear-gradient(135deg, #667db6 0%, #0082c8 50%, #0082c8 100%)', // Ocean Blue
  'linear-gradient(135deg, #654ea3 0%, #eaafc8 100%)', // Majestic Purple
  'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)', // Sunset Pink
  'linear-gradient(135deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%)', // Skyline
  'linear-gradient(135deg, #c31432 0%, #240b36 100%)', // Vampire's Kiss
  'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #0f0c29 100%)', // Twilight Shade
  'linear-gradient(135deg, #333333 0%, #dd1818 100%)', // Fiery Red
  'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)', // Passion
  'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)', // Royal
  'linear-gradient(135deg, #FFAFBD 0%, #ffc3a0 100%)', // Dreamy Peach
  'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)', // Clear Sky
  'linear-gradient(135deg, #cc2b5e 0%, #753a88 100%)', // Purple Love
  'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)', // Rosy Fade
  'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)', // Gotham
  'linear-gradient(135deg, #de6262 0%, #ffb88c 100%)', // Peachy Love
  'linear-gradient(135deg, #06beb6 0%, #48b1bf 100%)', // Teal Flow
  'linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%)', // Warm Sunset
  'linear-gradient(135deg, #c9d6ff 0%, #e2e2e2 100%)', // Cool Bliss
  'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Winter Dreams
];

const LeftToolbar = () => {
  const {
    setRows,rows, gridSize, gridWidth, gridHeight, setCols,cols,
    boxes, setBoxes, selectedColor, setSelectedColor,
    isDrawing, toggleDrawingMode,
  } = useGridContext();

  const gridPresets = [
    { name: '5x5', rows: 5, cols: 5 },
    { name: '20x20', rows: 20, cols: 20 },
    { name: '30x30', rows: 30, cols: 30 },
    { name: '40x40', rows: 40, cols: 40 },
  ];

  const handleRowsChange = (values: number[]) => setRows(values[0]);
  const handleColsChange = (values: number[]) => setCols(values[0]);
  const clearGrid = () => setBoxes([]);
  const saveGrid = () => console.log('Grid saved');

  const addBox = () => {
    const newBox = {
      id: `box-${boxes.length}`,
      config: {
        id: `box-${boxes.length}`,
        color: selectedColor,
        position: { x: 0, y: 0 },
        cellPosition: { row: 0, col: 0 },
        department: '', product: '', itemNum: '',
        size: gridSize,
        dragConstraints: { left: 0, right: gridWidth - gridSize, top: 0, bottom: gridHeight - gridSize },
        dragElastic: 0.2, style: {}
      }
    };
    setBoxes([...boxes, newBox]);
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-900 text-gray-100 p-6 space-y-6 border-r border-gray-700">
      <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4">
        <SettingsIcon className="inline-block mb-1 mr-2" size={24} /> Grid Settings
      </h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="columns" className="block text-sm font-medium text-gray-300">Columns</Label>
          <Slider id="columns" defaultValue={[10]} max={75} min={1} step={1} onValueChange={handleColsChange} className="mt-1" />
          <Input type="number" defaultValue={cols} value={cols} onChange={(e) => setCols(parseInt(e.target.value, 10))} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter column count" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rows" className="block text-sm font-medium text-gray-300">Rows</Label>
          <Slider id="rows" defaultValue={[10]} max={75} min={1} step={1} onValueChange={handleRowsChange} className="mt-1" />
          <Input type="number" defaultValue={rows} value={rows} onChange={(e) => setRows(parseInt(e.target.value, 10))} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter row count" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="drawingMode" className="text-sm font-medium text-gray-300">Drawing Mode</Label>
          <Switch checked={isDrawing} onClick={toggleDrawingMode} className="ml-2" />
        </div>

        <div className='border rounded-lg p-4 bg-transparent shadow'>
          <div className='mb-4'>
            <Label className="block text-sm font-medium text-gray-300">Presets</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {gridPresets.map((preset) => (
                <Button key={preset.name} variant={'ghost'} size={'sm'} onClick={() => { setRows(preset.rows); setCols(preset.cols); }} className="text-xs">
                  {preset.name}
                </Button>
              ))}
            </div>
          </div>

          <div className='grid grid-flow-row gap-3'>
            <Button variant="success" onClick={addBox} size={'sm'} icon={<PlusIcon size={16} />}>Add Box</Button>
            <Button variant="destructive" onClick={clearGrid} size={'sm'} icon={<Trash2Icon size={16} />}>Clear Grid</Button>
            <Button variant="secondary" onClick={saveGrid} size={'sm'} icon={<SaveIcon size={16} />}>Save Grid</Button>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-700">
        <Label className="font-semibold"><PaintBucketIcon className="inline-block mb-1 mr-2" size={20} />Box Color</Label>
        <ColorPicker
          circleSize={10}
          colors={customColors}
          color={selectedColor}
          onChange={setSelectedColor}
          className="mt-2"
        />
      </div>
      <DatePicker />
    </div>
  );
};

export default LeftToolbar;
