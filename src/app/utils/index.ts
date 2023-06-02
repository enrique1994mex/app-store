import { Product } from '@/interfaces/generics'
export const totalPrice = (data: Array<Product>) => {
	let sum = 0
	data.forEach((product) => (sum += product.price))
	return sum
}
