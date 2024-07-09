"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navbar() {

const navItems = [
    {id: 1, href:'/login', name: "Login"},
    {id: 2, href:'/register', name: "Register"}
]
  return (
    <nav className='list-none flex flex-row gap-5'>
        {navItems.map(({id, name, href}) => {
            const pathName = usePathname();
            const isActive = pathName.startsWith(href)
            return(
                <li key={id} className='border shadow'>
                    <Link href={href} className={`hover:text-blue-500 ${isActive && 'text-blue-700 font-bold underline'}`}>{name}</Link>
                </li>
            )
        })}
    </nav>
  )
}
