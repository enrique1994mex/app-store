'use client'
import SearchInput from '../components/SearchInput'
import Products from '../components/Products'

const Home = () => {
	return (
		<>
			<div className='flex items-center justify-center relative w-80 mb-4'>
				<h1 className='font-medium text-xl'>Exclusive products</h1>
			</div>
			<SearchInput />
			<Products products={[]} />
		</>
	)
}

export default Home
