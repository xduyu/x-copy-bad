import Link from "next/link"
import Image from "next/image"

export function Header() {
    return <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
        <Link
        href='/'
        className="flex items-center gap-5"
        >
            <Image
                src='/vercel.svg'
                alt="logo"
                width={28}
                height={28}
                priority
            />
        </Link>
        <nav className="flex gap-6 text-sm text-white/80">
        <Link href='/'>Home</Link>
        <Link href='/'>Explore</Link>
        <Link href='/'>Profile</Link>
        </nav>
    </header>
}
