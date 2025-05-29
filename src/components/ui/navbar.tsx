"use client"

import Link from "next/link"
import { IconMenu2, IconX } from "@tabler/icons-react" 
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react" 
import { cn } from "@/lib/utils"
import { IconOmega } from "@tabler/icons-react" 
import { ThemeSwitcher } from "../theme-switcher"
import LanguageSwitcher from "../language-switcher"
import { useTranslations } from "next-intl" 

interface NavItem {
  id: string 
  href: string
}

const MENU_ITEMS_CONFIG: NavItem[] = [
  { id: "home", href: "/" }, 
  { id: "about", href: "/#about-us" }, 
  { id: "service", href: "/#services" },
  { id: "contact", href: "/#contact-us" },
]

export default function Navbar() {
  const t = useTranslations("Navbar") 

  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) { 
        setMenuState(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", closeMenuOnResize)

    handleScroll()
    closeMenuOnResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", closeMenuOnResize)
    }
  }, [])

  const menuItems = MENU_ITEMS_CONFIG.map(item => ({
    ...item,
    name: t(item.id as any) 
  }));


  const navContainerClasses = cn(
    "mx-auto mt-2 max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-300", 
    isScrolled
      ? "bg-background/80 backdrop-blur-md rounded-xl border border-border shadow-sm lg:mt-2" 
      : "lg:mt-4" 
  )

  const mobileMenuContainerClasses = cn(
    "lg:hidden", 
    "absolute top-full left-0 right-0 z-40 mt-2 w-[calc(100%-1rem)] mx-auto", 
    "origin-top scale-95 opacity-0 transition-all duration-200 ease-out",
    "bg-background border border-border rounded-2xl p-6 shadow-xl", 
    {
      "transform-none scale-100 opacity-100": menuState, 
    }
  )

  return (
    <header className="fixed z-50 m-5 w-full"> 
      <nav data-state={menuState ? "active" : "inactive"} className="px-2">
        <div className={navContainerClasses}>
          <div className="relative flex items-center justify-between gap-6 py-3"> 
            <div className="flex shrink-0">
              <Link href="/" aria-label={t('home')} className="flex items-center space-x-2 text-foreground">
                <IconOmega />
                <span className="font-semibold text-lg">{t("brand")}</span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuState(false)} 
                  className="block rounded-md px-3 py-2 text-md text-muted-foreground font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                >
                  {t(item.id)}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-x-2 sm:gap-x-3">
              <ThemeSwitcher />
              <LanguageSwitcher />

              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? t("closeMenuAria") : t("openMenuAria")}
                  aria-expanded={menuState}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {menuState ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={mobileMenuContainerClasses} data-state={menuState ? "open" : "closed"}>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuState(false)} 
                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </nav>
    </header>
  )
}