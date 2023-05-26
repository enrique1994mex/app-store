import Navbar from '../Nabar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col items-center mt-20'>
			<Navbar />
			{children}
		</div>
	)
}

export default Layout
