"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface SplashScreenProps {
  onNext: () => void
}

export default function SplashScreen({ onNext }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext()
    }, 2000)
    return () => clearTimeout(timer)
  }, [onNext])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen flex-col items-center justify-center bg-black text-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-4"
      >
        <Image
          src="/images/favicon1.png"
          alt="Xceltrip Logo"
          width={180}
          height={180}
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="text-white text-3xl font-extrabold tracking-wide"
      >
        XCELTRIP
      </motion.h1>
    </motion.div>
  )
}
