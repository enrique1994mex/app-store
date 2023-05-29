'use client'
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react'
import { Data } from '@/interfaces/generics'

export type ContextShopping = {
	count: number
	setCount: Dispatch<SetStateAction<number>>
	isProductDetailOpen: boolean
	productDetail: () => void
	productToShow: Data | undefined
	setProductToShow: Dispatch<SetStateAction<Data | undefined>>
}

type Props = {
	children: ReactNode
}

export const ShoppingContext = createContext<ContextShopping | null>(null)

export const ShoppingProvider = ({ children }: Props) => {
	const [count, setCount] = useState(0)
	const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false)
	const [productToShow, setProductToShow] = useState<Data>()

	const productDetail = () => setIsProductDetailOpen((prevState) => !prevState)

	return (
		<ShoppingContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				productDetail,
				productToShow,
				setProductToShow,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	)
}
