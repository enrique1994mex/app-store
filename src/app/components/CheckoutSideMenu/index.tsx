'use client'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import OrderCard from '../OrderCard'
import style from '../../styles/checkout.module.css'

const CheckoutSideMenu = () => {
	const { isCheckoutMenu, checkoutMenu, setCartProducts, cartProducts } =
		useContext(ShoppingContext) as ContextShopping

	const handleDelete = (id: number) => {
		const filteredProducts = cartProducts.filter((product) => product.id !== id)
		setCartProducts((prevState) => [...filteredProducts])
	}
	return (
		<aside
			className={`${isCheckoutMenu ? 'flex' : 'hidden'} ${
				style.checkout
			} flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>My order</h2>
				<div onClick={() => checkoutMenu()}>
					<XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
				</div>
			</div>
			<div className='px-6 overflow-y-scroll'>
				{cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						product={product}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</aside>
	)
}

export default CheckoutSideMenu
