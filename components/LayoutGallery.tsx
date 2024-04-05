import React from 'react';

type Props = {};

export const LayoutGallery = (props: Props) => {
    // Simulated layouts
    const layouts = [
        { id: 1, name: "Small Office", rows: 4, cols: 6 },
        { id: 2, name: "Large Office", rows: 6, cols: 8 },
        { id: 3, name: "Conference Room", rows: 3, cols: 5 },
    ];

    return (
        <div className="py-8">
            <h2 className="text-xl text-white font-bold mb-4">Layout Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
                {layouts.map((layout) => (
                    <div key={layout.id} className="bg-black border border-gray-500 rounded-lg overflow-hidden shadow-lg">
                        <h3 className="text-sm text-white bg-gray-800 p-2">{layout.name}</h3>
                        <div className="p-2 bg-black flex flex-wrap" style={{ height: '160px' }}>
                            {[...Array(layout.rows * layout.cols)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1/${layout.cols} h-1/${layout.rows} border border-gray-500`}
                                    style={{ minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}
                                >
                                    {/* Optional: You can add content or styling here to represent different types of boxes or areas */}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
