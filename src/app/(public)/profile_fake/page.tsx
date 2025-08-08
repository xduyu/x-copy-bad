import type { Metadata } from "next/types"
import ProfileFake from "./ProfileFake"

export const metadata: Metadata = {
    title: 'profileFake'
}

export default function page() {
    return <ProfileFake/>
}
