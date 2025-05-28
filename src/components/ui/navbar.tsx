'use client'
import Link from 'next/link'
import { Menu, Omega, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { ThemeSwitcher } from '@/components/theme-switcher'
import LanguageSwitcher from '@/components/language-switcher'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/service' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-10 max-w-[90rem] transition-all duration-300', isScrolled && 'text-white font-bold bg-background/50 max-w-7xl rounded-2xl border backdrop-blur-lg mt-2 px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto ">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 font-bold text-2xl lg:text-3xl text-white">
                                <Omega className="size-7 lg:size-8" />
                                <span className="hidden sm:inline">Atik</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>
                            <ul className="flex gap-8 text-lg font-bold items-center">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="block duration-150 text-lg font-bold text-foreground hover:text-primary">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                                  <ThemeSwitcher />
                                  <LanguageSwitcher />
                            </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}