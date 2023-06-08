'use client'
import { Dispatch, SetStateAction, useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '@/app/context'
import { ContextShopping } from '@/app/context'
import Link from 'next/link'

const Navbar = () => {
	const { cartProducts, setSearchByCategory } = useContext(
		ShoppingContext
	) as ContextShopping
	return (
		<nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-lg'>
					<Link href='/' onClick={() => setSearchByCategory('')}>
						Shopi
					</Link>
				</li>
				<li>
					<Link href='/' onClick={() => setSearchByCategory('')}>
						All
					</Link>
				</li>
				<li>
					<Link href='/clothes' onClick={() => setSearchByCategory('clothes')}>
						Clothes
					</Link>
				</li>
				<li>
					<Link
						href='/electronics'
						onClick={() => setSearchByCategory('electronics')}
					>
						Electronics
					</Link>
				</li>
				<li>
					<Link
						href='/furnitures'
						onClick={() => setSearchByCategory('furniture')}
					>
						Furnitures
					</Link>
				</li>
				<li>
					<Link href='/shoes' onClick={() => setSearchByCategory('shoes')}>
						Shoes
					</Link>
				</li>
				<li>
					<Link href='/others' onClick={() => setSearchByCategory('others')}>
						Others
					</Link>
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
				<li className='flex items-center'>
					<ShoppingBagIcon className='h-6 w-6 text-black' />
					{cartProducts.length}
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
