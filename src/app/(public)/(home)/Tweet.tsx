import { PAGES } from "@/config/pages.config"
import type { ITweet } from "@/shared/Types/Tweet.interface"
import Image from "next/image"
import Link from "next/link"

interface Props {
    tweet: ITweet,
}

export function Tweet({tweet}: Props) {
    return <div className="border border-white/10 p-4 bg-black rounded-[10px] shadow-md">
        <div className="flex items-center gap-3 mb-2">
            <Image
                src='/vercel.svg'
                alt='file Logo'
                width={24}
                height={24}
            />
            <Link href={PAGES.PROFILE(tweet.author)}><p className="font-semibold">@{tweet.author}</p></Link>
        </div>
        <p className="text-white/90">{tweet.text}</p>
    </div>
}