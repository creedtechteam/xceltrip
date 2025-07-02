"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface WelcomeScreenProps {
  onNext: () => void
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <Image
        src="/images/welcome-bg.jpg" // Make sure this file exists
        alt="Welcome Background"
        fill
        className="object-cover"
        priority
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper - pinned to bottom */}
      <div className="relative z-10 flex flex-col justify-end h-full w-full px-6 pb-10">
        <div className="space-y-2 mb-6">
          <h1 className="text-3xl font-semibold">Welcome to 👋</h1>
          <h2 className="text-4xl font-extrabold text-yellow-500">XCELTRIP</h2>
          <p className="text-gray-300">The best booking app you will come across</p>
        </div>

        <Button
          onClick={onNext}
          className="w-full bg-yellow-500 py-3 text-black hover:bg-yellow-600"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
