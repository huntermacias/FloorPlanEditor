'use client';
import React, { useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { BoxPopoverProps } from "@/types/FloorPlanTypes";
import { Button } from "./ui/button";
import { motion } from 'framer-motion';



export function BoxPopover({ boxConfig, isOpen, close, setBoxes }: BoxPopoverProps) {
    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick({ ref, callback: close });

    // Local state to manage temporary changes before applying them
    const [details, setDetails] = useState({
        color: boxConfig.color,
        product: boxConfig.product || '',
        department: boxConfig.department || '',

    });

    const handleDetailsChange = (e: any) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleUpdate = () => {
        setBoxes((prevBoxes) => {
            return prevBoxes.map((box) => {
                if (box.id === boxConfig.id) {
                    return {
                        ...box,
                        config: {
                            ...box.config,
                            color: details.color,
                            product: details.product,
                            department: details.department,
                        },
                    };
                }
                return box;
            });
        });
        close();
    };



    return (
        <Popover open={isOpen} onOpenChange={close}>
            <PopoverTrigger asChild>
                <div className="absolute" />
            </PopoverTrigger>
            <PopoverContent
                ref={ref}
                className="w-80 p-8 bg-gray-950 backdrop-blur-md bg-opacity-20 filter rounded-lg border border-gray-600 shadow-xl"
                style={{
                    position: 'absolute',
                    top: `${boxConfig.position.y}px`,
                    left: `${boxConfig.position.x}px`,
                    transform: 'translate(10%, -50%)',
                }}
            >
                <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-white">Box Details</h4>
                    <div className="text-sm text-gray-400 space-y-2">
                        <p>Item #: <span className="text-gray-200">{boxConfig.itemNum}</span></p>
                        <p>Product: <span className="text-gray-200">{boxConfig.product}</span></p>
                        <p>Department: <span className="text-gray-200">{boxConfig.department}</span></p>
                    </div>

                    <hr className="border-gray-700" />
                    <div className="space-y-4">
                        <Label htmlFor="color" className="block text-sm font-medium text-gray-400">Color</Label>
                        <Input id="color" type="color" name="color" value={details.color} onChange={handleDetailsChange} className="h-10 w-full rounded-lg cursor-pointer shadow-sm border-gray-700" />
                        <Input id="product" type="text" name="product" placeholder="Product Name" value={details.product} onChange={handleDetailsChange} className="input w-full rounded-lg bg-gray-800 border-none text-white placeholder-gray-500 shadow-sm" />
                        <Input id="department" type="text" name="department" placeholder="Department Name" value={details.department} onChange={handleDetailsChange} className="input w-full rounded-lg bg-gray-800 border-none text-white placeholder-gray-500 shadow-sm" />
                    </div>
                    <Button className="mt-4 w-full rounded-lg shadow bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 hover:shadow-lg transition duration-300 ease-in-out">Update</Button>
                </div>
            </PopoverContent>
        </Popover>

    );
}