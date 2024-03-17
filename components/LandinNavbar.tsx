'use client'

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { auth, useAuth } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"],
})

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center ">
                <div className="relative mr-4 w-12 h-12">
                    <Image
                    alt="logo"
                    src='/logo.png'
                    width={100}
                    height={100}
                    />
                </div>
                <h1 className={cn("text-2xl font-bold text-white mt-1", font.className)}>Alpha</h1>
            </Link>
            <div className="flex items-center gap-x-2 ">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}