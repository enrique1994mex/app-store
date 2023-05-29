'use client'
import { Dispatch, SetStateAction, useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import { Product } from '@/interfaces/generics'

type Props = {
	product: Product
}

const Card = ({ product }: Props) => {
	const { setCount, productDetail, setProductToShow } = useContext(
		ShoppingContext
	) as ContextShopping

	const showProduct = (data: Product) => {
		productDetail()
		setProductToShow({ product: data })
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
				<div
					className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
					onClick={() => setCount((prevState) => prevState + 1)}
				>
					<PlusIcon className='h-6 w-6 text-black' />
				</div>
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-light'>{product.title}</span>
				<span className='text-sm font-medium'>{product.price}</span>
			</p>
		</div>
	)
}

export default Card
