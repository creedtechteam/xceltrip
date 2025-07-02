"use client"

import {
  ArrowLeft,
  HelpCircle,
  Bell,
  Eye,
  Building,
  ChevronRight,
  LogOut,
  Wallet,
} from "lucide-react"
import { useRouter } from "next/navigation"
import BottomNavigation from "@/components/bottom-navigation"

export default function WalletPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Top Navigation Icons */}
      <div className="flex items-center justify-between px-4 pt-6 pb-4">
        <ArrowLeft
          className="h-5 w-5 text-white cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="text-lg font-semibold">Wallet</h1>
        <div className="flex items-center space-x-4">
          <HelpCircle className="h-5 w-5 text-white" />
          <Bell className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Total Assets */}
        <div className="mb-2 flex items-center space-x-2">
          <span className="text-sm text-gray-400">Total Assets</span>
          <Eye className="h-4 w-4 text-gray-400" />
        </div>

        {/* Balance Card */}
        <div className="mb-6 flex items-center justify-between rounded-lg bg-yellow-500 px-4 py-5 text-black">
          <div className="text-2xl font-semibold">$1,200.86</div>
          <div className="flex flex-col items-end space-y-1 text-sm">
            <button className="text-right text-xs underline">Transaction History</button>
            <button className="rounded-full bg-black px-3 py-1 text-xs text-white">Deposit</button>
          </div>
        </div>

        {/* Placeholder Action Cards */}
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

        {/* Bottom Options */}
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

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation currentPath="/wallet" />
      </div>
    </div>
  )
}
