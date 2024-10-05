import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Tool {
  id: string;
  name: string;
  status: 'OK' | 'NG';
}

const tools: Tool[] = [
  { id: 'A', name: '工具A', status: 'NG' },
  { id: 'B', name: '工具B', status: 'OK' },
];

export default function ToolInspection() {
  const [selectedTool, setSelectedTool] = useState<Tool>(tools[0]);

  console.log(setSelectedTool);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <div className="border-2 border-black p-2 inline-block mb-4">
            <h2 className="text-xl font-bold">ツールボックスNo:01</h2>
          </div>
          <img
            src="/placeholder.svg"
            alt="Toolbox"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="border-2 border-black p-2 inline-block mb-4">
            <h2 className="text-xl font-bold">{selectedTool.name}</h2>
          </div>
          <div
            className={`w-full aspect-square ${selectedTool.status === 'OK' ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center`}
          >
            <span className="text-9xl font-bold text-black">
              {selectedTool.status}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          製品一覧を見る
        </Button>
      </div>
    </div>
  );
}
