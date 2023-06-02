'use client'
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react'
import { Data, Product } from '@/interfaces/generics'

export type ContextShopping = {
	count: number
	setCount: Dispatch<SetStateAction<number>>
	isProductDetailOpen: boolean
	productDetail: () => void
	productToShow: Data | undefined
	setProductToShow: Dispatch<SetStateAction<Data | undefined>>
	cartProducts: Array<Product>
	setCartProducts: Dispatch<SetStateAction<Array<Product>>>
	isCheckoutMenu: boolean
	checkoutMenu: () => void
}

type Props = {
	children: ReactNode
}

export const ShoppingContext = createContext<ContextShopping | null>(null)

export const ShoppingProvider = ({ children }: Props) => {
	const [count, setCount] = useState<number>(0)

	//Product Detail
	const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false)
	const productDetail = () => setIsProductDetailOpen((prevState) => !prevState)
	const [productToShow, setProductToShow] = useState<Data>()

	//Cart products
	const [cartProducts, setCartProducts] = useState<Array<Product>>([])

	//Checkout menu
	const [isCheckoutMenu, setIsCheckoutMenu] = useState<boolean>(false)
	const checkoutMenu = () => setIsCheckoutMenu((prevState) => !prevState)

	return (
		<ShoppingContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				productDetail,
				productToShow,
				setProductToShow,
				cartProducts,
				setCartProducts,
				isCheckoutMenu,
				checkoutMenu,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	)
}
