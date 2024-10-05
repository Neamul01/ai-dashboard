import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Camera, Download } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  quantity: number;
  status: 'OK' | 'NG';
  toolboxNumber: number;
}

const products: Product[] = [
  { id: 1, name: '製品A', quantity: 3, status: 'OK', toolboxNumber: 1 },
  { id: 2, name: '製品B', quantity: 5, status: 'OK', toolboxNumber: 1 },
  { id: 3, name: '製品C', quantity: 1, status: 'NG', toolboxNumber: 2 },
  { id: 4, name: '製品D', quantity: 3, status: 'NG', toolboxNumber: 2 },
  { id: 5, name: '製品E', quantity: 9, status: 'OK', toolboxNumber: 3 },
  { id: 6, name: '製品F', quantity: 4, status: 'NG', toolboxNumber: 4 },
];

export default function ProductInspection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <Camera className="w-16 h-16 text-gray-400" />
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <Input
          type="text"
          placeholder="検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-40"
        />
        <span className="self-center">から</span>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-40"
        />
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          <Download className="w-4 h-4 mr-2" />
          ダウンロード
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">製品ID</TableHead>
            <TableHead>製品名</TableHead>
            <TableHead>製品数</TableHead>
            <TableHead>状態</TableHead>
            <TableHead>ツールボックス番号</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell>{product.toolboxNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        <nav className="inline-flex">
          <Button variant="outline" className="rounded-l-md">
            1
          </Button>
          <Button variant="outline" className="bg-blue-500 text-white">
            2
          </Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">5</Button>
          <Button variant="outline">9</Button>
          <Button variant="outline">17</Button>
          <Button variant="outline">33</Button>
          <Button variant="outline" className="rounded-r-md">
            53
          </Button>
        </nav>
      </div>
    </div>
  );
}
