'use client'
import { useState, useContext } from 'react'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'

type Props = {
	target: { value: string }
}

const SearchInput = () => {
	const { setSearchByTitle } = useContext(ShoppingContext) as ContextShopping
	const [search, setSearch] = useState<string>('')

	const onSearch = ({ target: { value } }: Props) => {
		setSearch(value)
		setSearchByTitle(value)
	}

	return (
		<input
			type='text'
			placeholder='Search a product'
			className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
			onChange={onSearch}
			value={search}
		/>
	)
}

export default SearchInput
