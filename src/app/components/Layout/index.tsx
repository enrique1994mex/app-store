import Navbar from '../Nabar'
import CheckoutSideMenu from '../CheckoutSideMenu'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col items-center mt-20'>
			<Navbar />
			<CheckoutSideMenu />
			{children}
		</div>
	)
}

export default Layout
