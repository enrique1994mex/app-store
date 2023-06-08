'use client'
import { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import Card from '../Card'
import ProductDetail from '../ProductDetail'
import { Products, Product } from '@/interfaces/generics'

const Products = ({ products: data }: Products) => {
	const { products, setProducts, searchByTitle, searchByCategory } = useContext(
		ShoppingContext
	) as ContextShopping

	const [filteredItems, setFilteredItems] = useState<Array<Product>>([])

	useEffect(() => {
		if (products.length === 0) {
			setProducts(data)
		}
	}, [])

	useEffect(() => {
		if (searchByTitle) {
			setFilteredItems((prevState) => [
				...filteredItemsByTitle(products, searchByTitle),
			])
		}
	}, [searchByTitle])

	useEffect(() => {
		if (searchByCategory) {
			setFilteredItems((prevState) => [
				...filteredItemsByCategory(products, searchByCategory),
			])
		}
	}, [searchByCategory])

	const filteredItemsByTitle = (items: Array<Product>, search: string) => {
		return items.filter((item) => item.title.toLowerCase().includes(search))
	}
	const filteredItemsByCategory = (items: Array<Product>, search: string) => {
		return items.filter((item) =>
			item.category.name.toLowerCase().includes(search)
		)
	}

	const renderView = () => {
		if (searchByTitle.length > 0) {
			if (filteredItems?.length > 0) {
				return filteredItems.map((product) => (
					<Card key={product.id} product={product} />
				))
			} else {
				return <div>We dont have anything :</div>
			}
		} else if (searchByCategory.length > 0) {
			if (filteredItems?.length > 0) {
				return filteredItems.map((product) => (
					<Card key={product.id} product={product} />
				))
			} else {
				return <div>We dont have anything :</div>
			}
		} else {
			return products.map((product) => (
				<Card key={product.id} product={product} />
			))
		}
	}
	return (
		<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
			{renderView()}
			<ProductDetail />
		</div>
	)
}

export default Products
