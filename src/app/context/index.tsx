'use client'
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react'
import { Data, Product, Order } from '@/interfaces/generics'

export type ContextShopping = {
	isProductDetailOpen: boolean
	productDetail: () => void
	productToShow: Data | undefined
	setProductToShow: Dispatch<SetStateAction<Data | undefined>>
	products: Array<Product>
	setProducts: Dispatch<SetStateAction<Array<Product>>>
	cartProducts: Array<Product>
	setCartProducts: Dispatch<SetStateAction<Array<Product>>>
	searchByTitle: string
	setSearchByTitle: Dispatch<SetStateAction<string>>
	searchByCategory: string
	setSearchByCategory: Dispatch<SetStateAction<string>>
	order: Array<Order>
	setOrder: Dispatch<SetStateAction<Array<Order>>>
	isCheckoutMenu: boolean
	setIsCheckoutMenu: Dispatch<SetStateAction<boolean>>
}

type Props = {
	children: ReactNode
}

export const ShoppingContext = createContext<ContextShopping | null>(null)

export const ShoppingProvider = ({ children }: Props) => {
	//Product Detail
	const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false)
	const productDetail = () => setIsProductDetailOpen((prevState) => !prevState)
	const [productToShow, setProductToShow] = useState<Data>()

	// Products
	const [products, setProducts] = useState<Array<Product>>([])

	//Cart products
	const [cartProducts, setCartProducts] = useState<Array<Product>>([])

	//Search title
	const [searchByTitle, setSearchByTitle] = useState<string>('')

	//Search category
	const [searchByCategory, setSearchByCategory] = useState<string>('')

	//Cart Order
	const [order, setOrder] = useState<Array<Order>>([])

	//Checkout menu
	const [isCheckoutMenu, setIsCheckoutMenu] = useState<boolean>(false)

	return (
		<ShoppingContext.Provider
			value={{
				isProductDetailOpen,
				productDetail,
				productToShow,
				setProductToShow,
				products,
				setProducts,
				searchByTitle,
				setSearchByTitle,
				searchByCategory,
				setSearchByCategory,
				cartProducts,
				setCartProducts,
				order,
				setOrder,
				isCheckoutMenu,
				setIsCheckoutMenu,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	)
}
