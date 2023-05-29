'use client'
import { Dispatch, SetStateAction, useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '@/app/context'
import Link from 'next/link'

type ContextShopping = {
	count: number
	setCount: Dispatch<SetStateAction<number>>
}

const Navbar = () => {
	const { count } = useContext(ShoppingContext) as ContextShopping
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
				<li className='flex items-center'>
					<ShoppingBagIcon className='h-6 w-6 text-black' />
					{count}
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
