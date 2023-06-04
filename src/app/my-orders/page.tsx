'use client'
import { useContext } from 'react'
import Link from 'next/link'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import OrdersCard from '../components/OrdersCard'
const MyOrders = () => {
	const { order } = useContext(ShoppingContext) as ContextShopping
	return (
		<>
			<div className='flex items-center justify-center relative w-80 mb-6'>
				<h1 className='font-medium text-xl'>My Orders</h1>
			</div>
			{order.map((order) => (
				<Link key={order.id} href={`/my-order/${order.id}`}>
					<OrdersCard
						date={order.date}
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</>
	)
}

export default MyOrders
