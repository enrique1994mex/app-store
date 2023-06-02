import { Product } from '@/interfaces/generics'
import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
	product: Product
	handleDelete: (id: number) => void
}

const OrderCard = ({ product, handleDelete }: Props) => {
	const { id, title, images, price } = product
	return (
		<div className='flex justify-between items-center mb-2'>
			<div className='flex items-center gap-2'>
				<figure className='w-20 h-20'>
					<img
						className='w-full h-full rounded-lg object-cover'
						src={images[0]}
						alt={title}
					/>
				</figure>
				<p className='text-sm font-light'>{title}</p>
			</div>
			<div className='flex items-center gap-2'>
				<p className='text-lg font-medium'>{price}</p>
				<XMarkIcon
					onClick={() => handleDelete(id)}
					className='h-6 w-6 text-black cursor-pointer'
				/>
			</div>
		</div>
	)
}

export default OrderCard
