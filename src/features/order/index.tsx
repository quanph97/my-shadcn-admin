import { useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { ConfigDrawer } from '@/components/config-drawer.tsx'
import { ProfileDropdown } from '@/components/profile-dropdown.tsx'
import { Search } from '@/components/search.tsx'
import { ThemeSwitch } from '@/components/theme-switch.tsx'
import { All } from '@/features/order/allOrder/index.tsx'
import { Completed } from '@/features/order/completed/index.tsx'
import { ToShip } from '@/features/order/components/toShip.tsx'
import { Shipping } from '@/features/order/shipping/index.tsx'
import { Unpaid } from '@/features/order/unpaid/index.tsx'

export function Order() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { value: 'all', label: 'Tất cả' },
    { value: 'unpaid', label: 'Chờ xác nhận' },
    { value: 'cho-lay-hang', label: 'Chờ lấy hàng' },
    { value: 'shipping', label: 'Đang giao' },
    { value: 'completed', label: 'Đã giao' },
    { value: 'tra-hang', label: 'Trả hàng/Hoàn tiền/Hủy' },
  ]

  const tabTitles: Record<string, string> = Object.fromEntries(
    tabs.map((t) => [t.value, t.label])
  )

  return (
    <div className='min-h-screen w-full bg-white p-6 font-sans text-sm'>
      <div className='ms-auto mb-2 flex items-center justify-end space-x-4'>
        <Search />
        <div className='ms-auto flex items-center justify-end space-x-4'>
          <ThemeSwitch />
          <ConfigDrawer />
          <ProfileDropdown />
        </div>
      </div>

      {/* Header Section */}
      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-xl font-bold text-gray-800'>
          {tabTitles[activeTab] ?? 'Tất cả'}
        </h1>
        <div className='flex gap-2'>
          <Button variant='outline' size='sm' className='font-normal'>
            Xuất
          </Button>
          <Button variant='outline' size='sm' className='font-normal'>
            Lịch sử Xuất Báo cáo
          </Button>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='mb-6 h-auto justify-start rounded-none border-b bg-transparent p-0'>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className='rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 shadow-none transition-none data-[state=active]:border-b-orange-500 data-[state=active]:bg-transparent data-[state=active]:text-orange-600 data-[state=active]:shadow-none'
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value='all' className='space-y-4'>
          <All />
        </TabsContent>
        <TabsContent value='unpaid' className='space-y-4'>
          <Unpaid />
        </TabsContent>
        <TabsContent value='cho-lay-hang' className='space-y-4'>
          <ToShip />
        </TabsContent>
        <TabsContent value='shipping' className='space-y-4'>
          <Shipping />
        </TabsContent>
        <TabsContent value='completed' className='space-y-4'>
          <Completed />
        </TabsContent>
      </Tabs>
    </div>
  )
}
