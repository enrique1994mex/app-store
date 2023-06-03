type Category = {
	id: string
	name: string
	image: string
	creationAt: Date
	updatedAt: Date
}

export interface Product {
	id: number
	title: string
	price: number
	description: string
	images: Array<string>
	creationAt: Date
	updatedAt: Date
	category: Category
}

export interface Order {
	date: Date
	products: Array<Product>
	totalProducts: number
	totalPrice: number
}

export interface Data {
	product: Product
}

export interface Products {
	products: Array<Product>
}
