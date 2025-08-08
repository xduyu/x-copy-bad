"use client"

import { useParams } from "next/navigation"

export function Profile() {
    const params = useParams<{username:string}>()
    return <div>Profile  @{params.username}</div>
}
