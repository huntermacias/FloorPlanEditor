import { Aisle } from '@/types/storeTypes';
import React from 'react'


export const VerticalAisle = ({ aisle }: { aisle: Aisle }) => {
    const totalSize = aisle.items.reduce((sum, item) => sum + item.size, 0);
    // Adjust to vertical layout by setting grid rows dynamically
    const gridTemplateRows = `repeat(${totalSize}, minmax(50px, 1fr))`;

    return (
        <div className="mb-12 last:mb-0">
            <div className="backdrop-blur-xl bg-black/30 border border-gray-600/50 rounded-lg shadow-xl overflow-hidden w-[125px]">
                <h2 className="text-sm lg:text-md p-1 bg-black/40 backdrop-blur-md text-center font-light border-b border-gray-600/50">
                    {aisle.name}
                </h2>
                <div className="p-1 rounded-md">
                    <div className="grid gap-0.5" style={{ gridTemplateRows, maxWidth: '120px', margin: '0 auto' }}> {/* Adjust maxWidth as needed */}
                        {aisle.items.flatMap((item) =>
                            Array.from({ length: item.size }).map((_, index) => (
                                <div key={`${item.id}-${index}`}
                                    className="relative bg-black/60 p-2 rounded-lg shadow-md flex items-center justify-center text-center border border-gray-600/50"
                                    style={{ minHeight: '50px', backdropFilter: 'blur(10px)' }}>
                                    {index === 0 && (
                                        <>
                                            <span className="absolute top-2 left-2 text-xs font-light text-cyan-400">#{item.id}</span>
                                            <div className="text-xs text-gray-300 font-semibold">Size: {item.size}</div>
                                        </>
                                    )}
                                    {item.size > 1 && index < item.size - 1 && (
                                        <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 h-4 w-4 rotate-90">
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};