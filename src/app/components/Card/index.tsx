'use client'
import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import { Product } from '@/interfaces/generics'

type Props = {
	product: Product
}

const Card = ({ product }: Props) => {
	const {
		productDetail,
		setProductToShow,
		cartProducts,
		setCartProducts,
		setIsCheckoutMenu,
	} = useContext(ShoppingContext) as ContextShopping

	const showProduct = (data: Product) => {
		productDetail()
		setProductToShow({ product: data })
	}

	const addProductToCart = (event: any, data: Product) => {
		event.stopPropagation()
		setCartProducts((prevState) => [...prevState, data])
		setIsCheckoutMenu(true)
	}

	const renderIcon = (id: number) => {
		const isInCart =
			cartProducts.filter((product) => product.id === id).length > 0

		if (isInCart) {
			return (
				<div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
					<CheckIcon className='h-6 w-6 text-white' />
				</div>
			)
		} else {
			return (
				<div
					className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
					onClick={(event) => addProductToCart(event, product)}
				>
					<PlusIcon className='h-6 w-6 text-black' />
				</div>
			)
		}
	}
	return (
		<div
			className='bg-white cursor-pointer w-56 h-60 rounded-lg'
			onClick={() => showProduct(product)}
		>
			<figure className='relative mb-2 w-full h-4/5'>
				<span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
					{product.category.name}
				</span>
				<img
					className='w-full h-full object-cover rounded-lg'
					src={product.images[0]}
					alt={product.title}
				/>
				{renderIcon(product.id)}
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-light'>{product.title}</span>
				<span className='text-sm font-medium'>{product.price}</span>
			</p>
		</div>
	)
}

export default Card
