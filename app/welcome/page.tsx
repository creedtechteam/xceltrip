"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WelcomePage() {
  const router = useRouter()

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <Image
        src="/images/welcome-bg.jpg"
        alt="Welcome Background"
        fill
        className="object-cover"
        priority
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-end h-full w-full px-6 pb-10 sm:px-8 sm:pb-16">
        <div className="space-y-3 mb-6 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Welcome to 👋</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500">XCELTRIP</h2>
          <p className="text-sm sm:text-base text-gray-300">
            The best booking app you will come across.
          </p>
        </div>

        <Button
          onClick={() => router.push("/login")}
          className="w-full bg-yellow-500 py-3 text-black hover:bg-yellow-600"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
