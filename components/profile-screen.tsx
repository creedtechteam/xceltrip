"use client"

import { Settings, Wallet, ChevronRight, User } from "lucide-react"
import BottomNavigation from "@/components/bottom-navigation"

interface ProfileScreenProps {
  onNavigate: (screen: string) => void
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const menuItems = [
    { icon: Settings, label: "Settings", action: () => {} },
    { icon: Wallet, label: "Wallet", action: () => onNavigate("wallet") },
    { icon: User, label: "Log out", action: () => {} },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="flex-1 p-4">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-black">
            D
          </div>
          <h2 className="text-xl font-semibold">Daniel</h2>
        </div>

        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="flex w-full items-center justify-between rounded-lg bg-gray-800 p-4 text-left hover:bg-gray-700"
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-yellow-500" />
                <span>{item.label}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Become a host</h3>
          <div className="rounded-lg bg-gray-800 p-4">
            <p className="text-sm text-gray-300">Share your space and earn extra income</p>
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen="profile" onNavigate={onNavigate} />
    </div>
  )
}
