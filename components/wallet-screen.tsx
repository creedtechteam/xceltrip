"use client"

import { Plus, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BottomNavigation from "@/components/bottom-navigation"

interface WalletScreenProps {
  onNavigate: (screen: string) => void
}

export default function WalletScreen({ onNavigate }: WalletScreenProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="flex-1 p-4">
        <h1 className="mb-6 text-xl font-semibold">Wallet</h1>

        <div className="mb-6 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-black">
          <div className="mb-2 text-sm opacity-80">Available Balance</div>
          <div className="mb-4 text-3xl font-bold">$1,250.00</div>
          <Button className="bg-black text-white hover:bg-gray-800">
            <Plus className="mr-2 h-4 w-4" />
            Add Money
          </Button>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center space-y-2 rounded-lg bg-gray-800 p-4">
              <ArrowUpRight className="h-6 w-6 text-green-500" />
              <span className="text-sm">Send Money</span>
            </button>
            <button className="flex flex-col items-center space-y-2 rounded-lg bg-gray-800 p-4">
              <ArrowDownLeft className="h-6 w-6 text-blue-500" />
              <span className="text-sm">Request Money</span>
            </button>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Recent Transactions</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
              <div>
                <div className="font-medium">Hotel Booking</div>
                <div className="text-sm text-gray-400">Dec 15, 2024</div>
              </div>
              <div className="text-red-400">-$120.00</div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
              <div>
                <div className="font-medium">Wallet Top-up</div>
                <div className="text-sm text-gray-400">Dec 10, 2024</div>
              </div>
              <div className="text-green-400">+$500.00</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation currentScreen="wallet" onNavigate={onNavigate} />
    </div>
  )
}
