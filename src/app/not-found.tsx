import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center min-h-screen text-center px-4">
            <h1 className="text-7xl font-bold mb-4">404</h1>
            <p className="text-neutral-600 mb-4">This page doesn't exist. Or maybe it moved</p>
            <Link href='/' className="text-sm text-blue-500 hover:underline">← Back to home</Link>
        </div>
    )
}