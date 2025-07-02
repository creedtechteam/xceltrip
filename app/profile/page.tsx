"use client"

import {
  Settings,
  Wallet,
  ChevronRight,
  User,
  Shield,
  Users,
  Bell,
  HelpCircle,
  LogOut,
  ArrowLeft,
  Building,
} from "lucide-react"
import { useRouter } from "next/navigation"
import BottomNavigation from "@/components/bottom-navigation"

export default function ProfilePage() {
  const router = useRouter()

  const menuItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help & Support", path: "/help" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
    { icon: LogOut, label: "Log out", path: "/logout" },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-6 pb-4">
        <ArrowLeft className="h-5 w-5 text-white cursor-pointer" onClick={() => router.back()} />
        <h1 className="text-lg font-semibold">Profile</h1>
        <Bell className="h-5 w-5 text-white" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Profile Info */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gray-600 text-2xl font-semibold">
            D
          </div>
          <h2 className="text-xl font-semibold">Daniel</h2>
          <p className="text-sm text-gray-400">Guest</p>
        </div>

        {/* Badges and Connections */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-4">
            <Shield className="mb-2 h-6 w-6 text-yellow-500" />
            <span className="text-sm font-medium">Badges</span>
          </button>
          <button className="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-4">
            <Users className="mb-2 h-6 w-6 text-yellow-500" />
            <span className="text-sm font-medium">Connections</span>
          </button>
        </div>

        {/* Become a Host */}
        <div className="mb-8 rounded-lg bg-gray-800 p-4 flex items-center space-x-3">
          <div className="rounded bg-yellow-500 p-2">
            <Building className="h-5 w-5 text-black" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Become a host</h3>
            <p className="text-xs text-gray-400">The best booking app you will come across</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.path)}
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
      </div>

      {/* Bottom navigation (fixed) */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation currentPath="/profile" />
      </div>
    </div>
  )
}
