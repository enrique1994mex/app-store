import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-lg'>
					<Link href='/'>Shopi</Link>
				</li>
				<li>
					<Link href='/'>All</Link>
				</li>
				<li>
					<Link href='/clothes'>Clothes</Link>
				</li>
				<li>
					<Link href='/electronics'>Electronics</Link>
				</li>
				<li>
					<Link href='/furnitures'>Furnitures</Link>
				</li>
				<li>
					<Link href='/toys'>Toys</Link>
				</li>
				<li>
					<Link href='/others'>Others</Link>
				</li>
			</ul>
			<ul className='flex items-center gap-3'>
				<li>enrique@gmail.com</li>
				<li>
					<Link href='/my-orders'>My Orders</Link>
				</li>
				<li>
					<Link href='/my-account'>My Account</Link>
				</li>
				<li>
					<Link href='/sign-in'>Sign In</Link>
				</li>
				<li>Carrito</li>
			</ul>
		</nav>
	)
}

export default Navbar
