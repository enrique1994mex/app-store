import { ReactNode, createContext } from 'react'

const ShoppingContext = createContext(null)

export const ShoppingProvider = ({ children }: any) => {
	return (
		<ShoppingContext.Provider value={null}>{children}</ShoppingContext.Provider>
	)
}
