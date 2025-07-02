"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-md rounded-xl bg-white shadow-lg">
        {/* Header with back arrow */}
        <div className="relative border-b p-4 flex items-center justify-center">
          <ArrowLeft
            className="absolute left-4 h-5 w-5 text-gray-600 cursor-pointer hover:text-black"
            onClick={() => router.back()}
          />
          <h1 className="text-lg sm:text-xl font-bold text-center">Log in or sign up</h1>
        </div>

        {/* Form body */}
        <div className="p-5 sm:p-6">
          {/* Country Select */}
          <div className="mb-4">
            <Label htmlFor="country" className="text-sm text-gray-500 mb-1 block">
              Country/Region
            </Label>
            <select
              id="country"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            >
              <option>Nigeria (+234)</option>
            </select>
          </div>

          {/* Phone Input */}
          <div className="mb-6">
            <Label htmlFor="phone" className="text-sm text-gray-500 mb-1 block">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Continue Button */}
          <Button
            onClick={() => router.push("/home")}
            className="mb-6 w-full bg-yellow-500 py-3 text-black hover:bg-yellow-600"
          >
            Continue
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            {[
              { label: "Continue with email", icon: "/icons/email.png" },
              { label: "Continue with Apple", icon: "/icons/apple.png" },
              { label: "Continue with Google", icon: "/icons/google.png" },
              { label: "Continue with Facebook", icon: "/icons/facebook.png" },
            ].map((btn, idx) => (
              <button
                key={idx}
                className="relative w-full flex items-center gap-3 rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 transition"
              >
                <Image src={btn.icon} alt={btn.label} width={18} height={18} />
                <span className="absolute left-0 right-0 text-center pointer-events-none">
                  {btn.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
