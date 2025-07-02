"use client"

import SplashScreen from "@/components/splash-screen" // ✅ important
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()

  return <SplashScreen onNext={() => router.push("/welcome")} />
}
