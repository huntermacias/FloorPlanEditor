'use client'
import FloorPlanEditor from "@/components/FloorplanEditor";
import {Inventory} from "@/components/Inventory";
import { LayoutGallery } from "@/components/LayoutGallery";
import LeftToolbar from "@/components/LeftToolbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white">
    <aside className="fixed top-0 left-0 z-10 h-screen overflow-y-auto w-1/4 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg ">
      <LeftToolbar />
    </aside>
  
    <main className="flex-1 ml-[25%] p-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold">Floor Plan Editor</h1>
        <p className="text-gray-300 mt-1">Design your layout with precision and creativity.</p>
      </header>
  
      <div className="">
        <Tabs defaultValue="floorplan-editor">
          <div className="flex gap-4 mb-6">
            {/* Tabs */}
            <TabsList>
              <TabsTrigger value="floorplan-editor" className="tabs-trigger">Editor</TabsTrigger>
              <TabsTrigger value="layouts" className="tabs-trigger">Layouts</TabsTrigger>
              <TabsTrigger value="inventory" className="tabs-trigger">Inventory</TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Editor */}
          <TabsContent value="floorplan-editor">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Editor</h2>
              <p className="text-gray-400">Drag and drop elements to design your floor plan.</p>
            </div>
            <FloorPlanEditor />
          </TabsContent>
  
          {/* Tab 2: Layouts */}
          <TabsContent value="layouts">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Predefined Layouts</h2>
              <p className="text-gray-400">Choose from a variety of layouts to get started quickly.</p>
            </div>
            <LayoutGallery />
          </TabsContent>

          {/* Tab 3: Inventory */}
          <TabsContent value="inventory">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
              <p className="text-gray-400">Manage your inventory, sales, and routes</p>
            </div>
            <Inventory />
          </TabsContent>


        </Tabs>
      </div>
    </main>
  </div>
  

  );
}
