'use client'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Product } from '@/interfaces/generics'
import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
	totalPrice: number
	totalProducts: number
	date: Date
}

const OrdersCard = ({ date, totalPrice, totalProducts }: Props) => {
	return (
		<div className='flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80'>
			<div className='flex justify-between w-full'>
				<p className='flex flex-col'>
					<span className='font-light'>{`${date.getDate()}/${
						date.getMonth() + 1
					}/${date.getFullYear()}`}</span>
					<span className='font-light'>{totalProducts} articles</span>
				</p>
				<p className='flex items-center gap-2'>
					<span className='font-medium text-2xl'>{totalPrice}</span>
					<ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
				</p>
			</div>
		</div>
	)
}

export default OrdersCard
