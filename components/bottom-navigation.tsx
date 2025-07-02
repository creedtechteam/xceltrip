"use client"

import { useRouter } from "next/navigation"
import { Compass, Calendar, Users, Wallet, User } from "lucide-react"

interface BottomNavigationProps {
  currentPath: string
}

export default function BottomNavigation({ currentPath }: BottomNavigationProps) {
  const router = useRouter()

  const tabs = [
    { label: "Explore", icon: Compass, path: "/home" },
    { label: "Plan", icon: Calendar, path: "/plan" },
    { label: "Connect", icon: Users, path: "/connect" },
    { label: "Wallet", icon: Wallet, path: "/wallet" },
    { label: "Profile", icon: User, path: "/profile" },
  ]

  return (
    <div className="flex justify-around bg-gray-900 py-2 border-t border-gray-800">
      {tabs.map(({ label, icon: Icon, path }) => (
        <button
          key={label}
          onClick={() => router.push(path)}
          className={`flex flex-col items-center text-xs ${
            currentPath === path ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          <Icon className="h-5 w-5 mb-1" />
          {label}
        </button>
      ))}
    </div>
  )
}
