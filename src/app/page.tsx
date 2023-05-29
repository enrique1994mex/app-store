import Card from './components/Card'
import ProductDetail from './components/ProductDetail'
import { Product } from '@/interfaces/generics'

async function getData() {
	const res = await fetch('https://api.escuelajs.co/api/v1/products')
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
export default async function Home() {
	const data: Array<Product> = await getData()
	return (
		<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
			{data.map((product) => (
				<Card product={product} />
			))}
			<ProductDetail />
		</div>
	)
}
