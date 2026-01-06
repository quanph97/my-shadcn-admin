import { useState, type ChangeEvent } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';








type OrderRow = {
  id: string
  productName: string
  sku?: string
  totalOrders: number
  status: string
  countdown?: string
  carrier: string
}

export function Completed() {
  const [searchField, setSearchField] = useState('1') // default Mã đơn hàng
  const [searchText, setSearchText] = useState('') // input Mã đơn hàng
  const [carrier, setCarrier] = useState('all') // default Tất cả ĐVVC

  const placeholders: Record<string, string> = {
    '1': 'Nhập Mã đơn hàng',
    '2': 'Nhập Tên người mua',
    '3': 'Nhập Sản phẩm',
    '4': 'Nhập Mã vận đơn',
  }
  const placeholderText = placeholders[searchField] ?? 'Nhập'

  const orders: OrderRow[] = [
    {
      id: 'DH001',
      productName: 'Áo sơ mi nam',
      sku: 'SM-001',
      totalOrders: 5,
      status: 'Đang vận chuyển',
      countdown: '2 ngày',
      carrier: 'GHN',
    },
    {
      id: 'DH002',
      productName: 'Tai nghe Bluetooth',
      sku: 'TN-342',
      totalOrders: 2,
      status: 'Đã giao',
      countdown: undefined,
      carrier: 'J&T',
    },
    {
      id: 'DH003',
      productName: 'Balo thể thao',
      sku: 'BL-129',
      totalOrders: 2,
      status: 'Chờ lấy hàng',
      countdown: '1 ngày',
      carrier: 'GHTK',
    },
  ]
  const totalOrdersSum = orders.reduce((sum, o) => sum + o.totalOrders, 0)

  const handleReset = () => {
    setSearchField('1')
    setSearchText('')
    setCarrier('all')
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <div className='flex flex-1 rounded-md border'>
          <Select value={searchField} onValueChange={setSearchField}>
            <SelectTrigger className='w-40 border-none focus:ring-0'>
              <SelectValue placeholder='Mã đơn hàng' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>Mã đơn hàng</SelectItem>
              <SelectItem value='2'>Tên người mua</SelectItem>
              <SelectItem value='3'>Sản phẩm</SelectItem>
              <SelectItem value='4'>Mã vận đơn</SelectItem>
            </SelectContent>
          </Select>
          <div className='my-2 w-px bg-gray-200'></div>
          <Input
            placeholder={placeholderText}
            className='border-none focus-visible:ring-0'
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
          />
        </div>

        <div className='flex flex-0 items-center rounded-md border px-3'>
          <span className='mr-2 whitespace-nowrap text-gray-950'>
            Đơn vị vận chuyển
          </span>
          <Select value={carrier} onValueChange={setCarrier}>
            <SelectTrigger className='border-none focus:ring-0'>
              <SelectValue placeholder='Tất cả ĐVVC' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>Tất cả ĐVVC</SelectItem>
              <SelectItem value='bulky'>Hàng Cồng Kềnh</SelectItem>
              <SelectItem value='express'>Hỏa Tốc</SelectItem>
              <SelectItem value='speed'>Nhanh</SelectItem>
              <SelectItem value='same_day'>Trong Ngày</SelectItem>
              <SelectItem value='locker'>Tủ Nhận Hàng</SelectItem>
              <SelectItem value='others'>Others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className='border border-orange-500 bg-white px-6 text-orange-500 hover:bg-orange-50'>
          Áp dụng
        </Button>
        <Button
          variant='outline'
          className='text-gray-500'
          onClick={handleReset}
        >
          Đặt lại
        </Button>
      </div>
      <div className='mb-4'>
        <h2 className='text-lg font-medium'>{totalOrdersSum} Đơn hàng</h2>
      </div>
      <div className='w-full overflow-hidden rounded-sm border'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b bg-gray-50 text-xs text-gray-500'>
              <th className='col-span-2 p-3 text-left'>Sản phẩm</th>
              <th className='p-3 text-center'>Tổng Đơn hàng</th>
              <th className='p-3 text-center'>Trạng thái | Đếm ngược</th>
              <th className='p-3 text-center'>Đơn vị vận chuyển</th>
              <th className='p-3 text-center'>Thao tác</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={5} className='p-8'>
                  <div className='flex flex-col items-center justify-center bg-white py-24'>
                    <div className='mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50'>
                      <FileText className='h-10 w-10 text-gray-200' />
                    </div>
                    <p className='text-center text-sm text-gray-400'>
                      Không có đơn sau 03/01/2024. Sử dụng Xuất báo cáo để xem
                      những đơn cũ hơn.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              orders.map((o) => (
                <tr key={o.id} className='text-sm'>
                  <td className='p-3'>
                    <div className='flex flex-col'>
                      <span className='font-medium text-gray-800'>
                        {o.productName}
                      </span>
                      {o.sku && (
                        <span className='text-xs text-gray-500'>{o.sku}</span>
                      )}
                    </div>
                  </td>

                  <td className='p-3 text-center'>
                    <span className='text-sm text-gray-700'>
                      {o.totalOrders}
                    </span>
                  </td>

                  <td className='p-3 text-center'>
                    <div>
                      <div className='text-sm font-medium text-gray-800'>
                        {o.status}
                      </div>
                      {o.countdown && (
                        <div className='text-xs text-gray-500'>
                          {o.countdown}
                        </div>
                      )}
                    </div>
                  </td>

                  <td className='p-3 text-center'>
                    <span className='text-sm text-gray-700'>{o.carrier}</span>
                  </td>

                  <td className='p-3 text-center'>
                    <div className='flex items-center justify-center gap-2'>
                      <Button className='h-7 px-3 text-xs'>Xem</Button>
                      <Button variant='outline' className='h-7 px-3 text-xs'>
                        Hủy
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
