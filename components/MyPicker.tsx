import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';


interface ColorPickerProps {
    circleSize: number;
    colors: string[];
    color: string;
    onChange: (color: string) => void;
    className?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ circleSize, colors, color, onChange, className }) => {
    const [customColor, setCustomColor] = useState('');
    const [isGradient, setIsGradient] = useState(false);

    const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;
        setCustomColor(newColor);
        onChange(newColor); 
    };

    const toggleGradient = () => setIsGradient(!isGradient);

    return (
        <div className={`flex flex-col gap-4 px-4 py-4 ${className} rounded-lg shadow-lg bg-white/10 backdrop-blur`}>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <Button
                    className={`w-${circleSize} h-${circleSize} rounded-full overflow-hidden shadow-md border-dotted border-2 border-gray-300 transition-transform duration-300 ease-in-out
                        ${!colors.includes(color) ? 'scale-110 border-purple-500' : 'scale-100'}`}
                    style={{ backgroundColor: color }}
                >
                    {!colors.includes(color) && (
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="w-3/4 h-3/4 rounded-full" style={{ backgroundColor: color }}></span>
                        </span>
                    )}
                </Button>
                {colors.map((colorOption, index) => (
                    <Button
                        key={index}
                        className={`relative w-${circleSize} h-${circleSize} rounded-full overflow-hidden shadow-md transition-transform duration-300 ease-in-out
                            ${color === colorOption ? 'scale-110 border-2 border-purple-500' : 'scale-100'}`}
                        style={{ backgroundImage: colorOption }}
                        onClick={() => onChange(colorOption)}
                    >
                        {color === colorOption && (
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="w-3/4 h-3/4 bg-black/50 rounded-full"></span>
                            </span>
                        )}
                    </Button>
                ))}
            </div>
            <div className="grid gap-2">
                <Input
                    type="text"
                    value={customColor}
                    onChange={handleCustomColorChange}
                    placeholder={isGradient ? "Enter gradient CSS" : "Enter hex color"}
                    className="input rounded-lg bg-gray-800 text-white placeholder-gray-400"
                />
            </div>
            <div className="flex items-center gap-4">
                <Label className="flex items-center gap-2 cursor-pointer">
                    <span className="text-white">Gradient</span>
                    <Switch checked={isGradient} onClick={toggleGradient} className="bg-gray-700" />
                </Label>
            </div>
        </div>
    );
};

export default ColorPicker;
