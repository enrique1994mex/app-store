'use client'
import { useContext } from 'react'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import OrderCard from '../components/OrderCard'

const MyOrder = () => {
	const { order } = useContext(ShoppingContext) as ContextShopping
	return (
		<div>
			MyOrder
			<div className='flex flex-col w-80'>
				{order?.[order.length - 1]?.products.map((product) => (
					<OrderCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default MyOrder
