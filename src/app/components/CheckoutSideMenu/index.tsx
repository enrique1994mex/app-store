'use client'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import { Order } from '@/interfaces/generics'
import OrderCard from '../OrderCard'
import { totalPrice } from '@/app/utils'
import style from '../../styles/checkout.module.css'

const generateId = () => Math.random().toString(36).substring(2, 9)

const CheckoutSideMenu = () => {
	const {
		isCheckoutMenu,
		setIsCheckoutMenu,
		setCartProducts,
		cartProducts,
		setOrder,
	} = useContext(ShoppingContext) as ContextShopping

	const handleDelete = (id: number) => {
		const filteredProducts = cartProducts.filter((product) => product.id !== id)
		setCartProducts((prevState) => [...filteredProducts])
	}

	const handleCheckout = () => {
		const orderToAdd: Order = {
			id: generateId(),
			date: new Date(),
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
		}
		setOrder((prevState) => [...prevState, orderToAdd])
		setCartProducts([])
		setIsCheckoutMenu(false)
	}
	return (
		<aside
			className={`${isCheckoutMenu ? 'flex' : 'hidden'} ${
				style.checkout
			} flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>My order</h2>
				<div onClick={() => setIsCheckoutMenu(false)}>
					<XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
				</div>
			</div>
			<div className='px-6 overflow-y-scroll flex-1'>
				{cartProducts.map((product) => (
					<OrderCard
						key={product.id}
						product={product}
						handleDelete={handleDelete}
					/>
				))}
			</div>
			<div className='px-6 mb-4'>
				<p className='flex justify-between items-center mb-2'>
					<span className='font-light'>Total:</span>
					<span className='font-medium text-2xl'>
						${totalPrice(cartProducts)}
					</span>
				</p>
				<Link href='my-order/last'>
					<button
						className='bg-black py-3 text-white w-full rounded-lg'
						onClick={() => handleCheckout()}
					>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	)
}

export default CheckoutSideMenu
