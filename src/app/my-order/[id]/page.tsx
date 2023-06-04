'use client'
import { useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import OrderCard from '../../components/OrderCard'
import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants'

const MyOrder = () => {
	const { order } = useContext(ShoppingContext) as ContextShopping
	const pathname = usePathname()
	let index = pathname.substring(pathname.lastIndexOf('/') + 1)
	return (
		<div>
			<div className='flex items-center justify-center relative w-80'>
				<Link href='/my-orders' className='absolute left-0'>
					<ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
				</Link>
				<h1>My Order</h1>
			</div>
			<div className='flex flex-col w-80'>
				{index === 'last'
					? order?.[order.length - 1]?.products.map((product) => (
							<OrderCard key={product.id} product={product} />
					  ))
					: order
							?.filter((order) => order.id === index)[0]
							.products.map((product) => (
								<OrderCard key={product.id} product={product} />
							))}
			</div>
		</div>
	)
}

export default MyOrder
