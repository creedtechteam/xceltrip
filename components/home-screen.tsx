"use client"

import { Search, Calendar, Users, MapPin, Heart, Gift, BadgePercent, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import BottomNavigation from "@/components/bottom-navigation"

interface HomeScreenProps {
  onNavigate: (screen: string) => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const hotels = [
    {
      id: 1,
      name: "Luxury Resort",
      location: "Bali, Indonesia",
      price: "$100",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      name: "City Hotel",
      location: "Tokyo, Japan",
      price: "$100",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      name: "Modern Flat",
      location: "Seoul, South Korea",
      price: "$100",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 4,
      name: "Beach View",
      location: "Miami, USA",
      price: "$100",
      image: "/placeholder.svg?height=120&width=200",
    },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Scrollable content area */}
      <div className="pb-20 px-4 pt-6 overflow-y-auto">
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search"
            className="w-full rounded-full bg-gray-800 border-none pl-10 text-white placeholder-gray-400"
          />
        </div>

        {/* Icon buttons */}
        <div className="mb-6 grid grid-cols-4 gap-4 text-center text-xs font-medium">
          <div className="flex flex-col items-center space-y-1">
            <Calendar className="h-5 w-5 text-yellow-400" />
            <span>Bookings</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Gift className="h-5 w-5 text-yellow-400" />
            <span>Events</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>Rewards</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <BadgePercent className="h-5 w-5 text-yellow-400" />
            <span>Badges</span>
          </div>
        </div>

        {/* Section: Popular homes */}
        <h2 className="mb-2 text-lg font-semibold">Popular homes in....</h2>
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-4 pr-4">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="relative w-48 flex-shrink-0 rounded-lg bg-gray-800">
                <div className="h-28 w-full rounded-t-lg bg-gray-700"></div>
                <Heart className="absolute top-2 right-2 h-4 w-4 text-red-500 fill-red-500" />
                <div className="p-3">
                  <h3 className="text-sm font-medium">{hotel.name}</h3>
                  <span className="text-xs text-gray-400">{hotel.price} per night</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Available Next Month */}
        <h2 className="mb-2 text-lg font-semibold">Available Next Month</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pr-4">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="w-48 flex-shrink-0 rounded-lg bg-gray-800">
                <div className="h-28 w-full rounded-t-lg bg-gray-700"></div>
                <div className="p-3">
                  <h3 className="text-sm font-medium">{hotel.name}</h3>
                  <span className="text-xs text-gray-400">{hotel.price} per night</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation currentScreen="home" onNavigate={onNavigate} />
      </div>
    </div>
  )
}
