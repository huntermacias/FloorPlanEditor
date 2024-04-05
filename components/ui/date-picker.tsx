"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className="group w-full flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:border-blue-500 hover:text-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
        >
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5 text-blue-300 group-hover:text-blue-400" />
            <span>
              {date ? format(date, "PPP") : "Pick a date"}
            </span>
          </div>
          <span className="text-gray-400 text-xs">
            {date ? format(date, "PPPP") : "No date selected"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-2 p-4 bg-white text-black rounded-md shadow-xl w-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
