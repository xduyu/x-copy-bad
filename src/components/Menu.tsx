"use client"
import { PAGES } from "@/config/pages.config"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Menu() {
    const pathname = usePathname()
    
    return (
    <nav className="flex gap-6 text-sm text-white/80">
        <Link className={pathname === PAGES.HOME ? 'text-white' : 'text-white/70'} href={PAGES.HOME}>Home</Link>
        <Link className={pathname === PAGES.EXPLORER ? 'text-white' : 'text-white/70'} href={PAGES.EXPLORER}>Explore</Link>
        <Link className={pathname === PAGES.PROFILE_FAKE ? 'text-white' : 'text-white/70'} href={PAGES.PROFILE_FAKE}>Profile</Link>
    </nav>
    )
}
