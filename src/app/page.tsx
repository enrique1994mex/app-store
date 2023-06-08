import { Product } from '@/interfaces/generics'
import SearchInput from './components/SearchInput'
import Products from './components/Products'

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
		<>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>Exclusive products</h1>
			</div>
			<SearchInput />
			<Products products={data} />
		</>
	)
}
