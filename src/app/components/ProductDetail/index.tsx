'use client'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import style from '../../styles/product.module.css'

const ProductDetail = () => {
	const { isProductDetailOpen, productDetail, productToShow } = useContext(
		ShoppingContext
	) as ContextShopping

	return (
		<aside
			className={`${isProductDetailOpen ? 'flex' : 'hidden'} ${
				style.product
			} flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div onClick={() => productDetail()}>
					<XMarkIcon className='h-6 w-6 text-black cursor-pointer' />
				</div>
			</div>
			<figure className='px-6'>
				<img
					className='w-full h-full rounded-lg'
					src={productToShow?.product.images[0]}
					alt={productToShow?.product.title}
				/>
			</figure>
			<p className='flex flex-col p-6'>
				<span className='font-medium text-2xl mb-2'>
					{productToShow?.product.price}
				</span>
				<span className='font-medium text-md'>
					{productToShow?.product.title}
				</span>
				<span className='font-light text-sm'>
					{productToShow?.product.description}
				</span>
			</p>
		</aside>
	)
}

export default ProductDetail
