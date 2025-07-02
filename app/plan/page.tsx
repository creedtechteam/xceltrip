"use client"

import {
  ArrowLeft,
  Building,
  ChevronRight,
  HelpCircle,
  Wallet,
  LogOut,
} from "lucide-react"
import { useRouter } from "next/navigation"
import BottomNavigation from "@/components/bottom-navigation"

export default function PlanScreen() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center space-x-4 px-4 pt-6 pb-4">
        <ArrowLeft
          className="h-5 w-5 text-white cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="text-lg font-semibold">Plan</h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 px-4 pb-24 overflow-y-auto">
        {/* Placeholder boxes */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="h-24 rounded-lg bg-gray-800" />
          <div className="h-24 rounded-lg bg-gray-800" />
        </div>

        {/* Become a Host */}
        <div className="mb-8 flex items-center space-x-3 rounded-lg bg-gray-800 p-4">
          <div className="rounded bg-yellow-500 p-2">
            <Building className="h-5 w-5 text-black" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Become a host</h3>
            <p className="text-xs text-gray-400">The best booking app you will come across</p>
          </div>
        </div>

        {/* Menu items */}
        <div className="space-y-1">
          {[
            { label: "Help & Support", icon: HelpCircle, path: "/help" },
            { label: "Wallet", icon: Wallet, path: "/wallet" },
            { label: "Log out", icon: LogOut, path: "/logout" },
          ].map((item, index) => (
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
        <BottomNavigation currentPath="/plan" />
      </div>
    </div>
  )
}
