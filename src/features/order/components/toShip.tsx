import { FileOutput, Printer, RotateCcw } from 'lucide-react';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'

export function ToShip() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-4'>
        <span className='w-32 text-gray-500'>Loại Đơn hàng</span>
        <div className='flex gap-2'>
          <Badge
            variant='outline'
            className='cursor-pointer rounded-full border-orange-500 bg-orange-50 px-4 py-1 font-normal text-orange-600'
          >
            Đơn thường (0)
          </Badge>
          <Badge
            variant='outline'
            className='cursor-pointer rounded-full px-4 py-1 font-normal text-gray-600 hover:bg-gray-50'
          >
            Đơn Hoả Tốc (0)
          </Badge>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <span className='w-32 text-gray-500'>Trạng thái đơn hàng</span>
        <div className='flex gap-2'>
          <Button
            variant='ghost'
            size='sm'
            className='h-8 rounded-full px-4 font-normal'
          >
            Tất cả
          </Button>
          <Button
            variant='outline'
            size='sm'
            className='h-8 rounded-full border-orange-500 bg-orange-50 px-4 font-normal text-orange-600'
          >
            Chưa xử lý
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='h-8 rounded-full px-4 font-normal'
          >
            Đã xử lý
          </Button>
        </div>
      </div>

      {/* Search Bars */}
      <div className='flex items-center gap-2'>
        <div className='flex flex-1 rounded-md border'>
          <Select defaultValue='id'>
            <SelectTrigger className='w-[150px] border-none focus:ring-0'>
              <SelectValue placeholder='Mã đơn hàng' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='id'>Mã đơn hàng</SelectItem>
              <SelectItem value='name'>Tên khách hàng</SelectItem>
            </SelectContent>
          </Select>
          <div className='my-2 w-[1px] bg-gray-200'></div>
          <Input
            placeholder='Nhập Mã đơn hàng'
            className='border-none focus-visible:ring-0'
          />
        </div>

        <div className='flex flex-1 items-center rounded-md border px-3'>
          <span className='mr-2 whitespace-nowrap text-gray-400'>
            Đơn vị vận chuyển
          </span>
          <Select defaultValue='all'>
            <SelectTrigger className='border-none focus:ring-0'>
              <SelectValue placeholder='Tất cả ĐVVC' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>Tất cả ĐVVC</SelectItem>
              <SelectItem value='jt'>J&T Express</SelectItem>
              <SelectItem value='ghn'>GHN</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className='border border-orange-500 bg-white px-6 text-orange-500 hover:bg-orange-50'>
          Áp dụng
        </Button>
        <Button variant='outline' className='text-gray-500'>
          Đặt lại
        </Button>
      </div>

        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-lg font-bold'>0 Kiện hàng</h2>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' className='text-xs'>
              <RotateCcw className='mr-1 h-3 w-3' /> Sắp xếp theo: Hạn gửi hàng
              (Xa - Gần nhất)
            </Button>
            <Button className='size-sm bg-orange-500 text-white hover:bg-orange-600'>
              <Printer className='mr-2 h-4 w-4' /> Giao Hàng Loạt
            </Button>
          </div>
        </div>

        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-y bg-gray-50 text-left text-gray-500'>
              <th className='p-3 font-normal'>Sản phẩm</th>
              <th className='p-3 text-center font-normal'>Tổng cộng</th>
              <th className='p-3 text-center font-normal'>
                Trạng thái | Đếm ngược (?)
              </th>
              <th className='p-3 text-center font-normal'>Đơn vị vận chuyển</th>
              <th className='p-3 text-center font-normal'>Thao tác</th>
            </tr>
          </thead>
        </table>

        {/* Empty State */}
        <div className='flex flex-col items-center justify-center py-20 text-gray-400'>
          <div className='mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gray-50'>
            <FileOutput className='h-12 w-12 opacity-20' />
          </div>
          <p className='text-sm'>Không tìm thấy đơn hàng</p>
          <button className='mt-2 flex items-center text-blue-500 hover:underline'>
            <RotateCcw className='mr-1 h-3 w-3' /> Vui lòng tải lại
          </button>
        </div>
    </div>
  )
}

// function SimpleBarList({
//   items,
//   valueFormatter,
//   barClass,
// }: {
//   items: { name: string; value: number }[]
//   valueFormatter: (n: number) => string
//   barClass: string
// }) {
//   const max = Math.max(...items.map((i) => i.value), 1)
//   return (
//     <ul className='space-y-3'>
//       {items.map((i) => {
//         const width = `${Math.round((i.value / max) * 100)}%`
//         return (
//           <li key={i.name} className='flex items-center justify-between gap-3'>
//             <div className='min-w-0 flex-1'>
//               <div className='mb-1 truncate text-xs text-muted-foreground'>
//                 {i.name}
//               </div>
//               <div className='h-2.5 w-full rounded-full bg-muted'>
//                 <div
//                   className={`h-2.5 rounded-full ${barClass}`}
//                   style={{ width }}
//                 />
//               </div>
//             </div>
//             <div className='ps-2 text-xs font-medium tabular-nums'>
//               {valueFormatter(i.value)}
//             </div>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }
