"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginScreenProps {
  onNext: () => void
}

export default function LoginScreen({ onNext }: LoginScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white shadow-md">
        {/* Header */}
        <div className="relative border-b p-4 flex items-center justify-center">
          <h1 className="text-base font-bold text-center">Log in or sign up</h1>
          <X className="absolute right-4 top-4 h-5 w-5 cursor-pointer" />
        </div>

        {/* Form body */}
        <div className="p-5">
          {/* Country Select */}
          <div className="mb-4">
            <Label htmlFor="country" className="text-sm text-gray-500 mb-1 block">
              country/region
            </Label>
            <select
              id="country"
              className="w-full rounded-md border border-gray-400 px-3 py-2 text-sm focus:outline-none"
            >
              <option>Nigeria (+234)</option>
            </select>
          </div>

          {/* Phone Input */}
          <div className="mb-6">
            <Input
              id="phone"
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
            />
          </div>

          {/* Continue Button */}
          <Button
            onClick={onNext}
            className="mb-6 w-full bg-[#b5853e] py-3 text-white hover:bg-[#a5752d]"
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
            {/* Email */}
            <button className="relative w-full flex items-center gap-3 rounded-md border border-gray-400 px-4 py-2 text-sm">
              <Image src="/icons/email.png" alt="email" width={18} height={18} />
              <span className="absolute left-0 right-0 text-center">Continue with email</span>
            </button>

            {/* Apple */}
            <button className="relative w-full flex items-center gap-3 rounded-md border border-gray-400 px-4 py-2 text-sm">
              <Image src="/icons/apple.png" alt="apple" width={18} height={18} />
              <span className="absolute left-0 right-0 text-center">Continue with Apple</span>
            </button>

            {/* Google */}
            <button className="relative w-full flex items-center gap-3 rounded-md border border-gray-400 px-4 py-2 text-sm">
              <Image src="/icons/google.png" alt="google" width={18} height={18} />
              <span className="absolute left-0 right-0 text-center">Continue with Google</span>
            </button>

            {/* Facebook */}
            <button className="relative w-full flex items-center gap-3 rounded-md border border-gray-400 px-4 py-2 text-sm">
              <Image src="/icons/facebook.png" alt="facebook" width={18} height={18} />
              <span className="absolute left-0 right-0 text-center">Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
