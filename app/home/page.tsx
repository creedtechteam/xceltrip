"use client"

import {
  Search,
  Calendar,
  Gift,
  Star,
  BadgePercent,
  Heart,
} from "lucide-react"
import Image from "next/image"
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
      image: "/images/hotel1.jpg",
    },
    {
      id: 2,
      name: "City Hotel",
      location: "Tokyo, Japan",
      price: "$120",
      image: "/images/hotel2.jpg",
    },
    {
      id: 3,
      name: "Modern Flat",
      location: "Seoul, South Korea",
      price: "$90",
      image: "/images/hotel3.jpg",
    },
    {
      id: 4,
      name: "Beach View",
      location: "Miami, USA",
      price: "$150",
      image: "/images/hotel4.jpg",
    },
    {
      id: 5,
      name: "Mountain Lodge",
      location: "Swiss Alps",
      price: "$130",
      image: "/images/hotel5.jpg",
    },
    {
      id: 6,
      name: "Penthouse Suite",
      location: "Dubai, UAE",
      price: "$250",
      image: "/images/hotel6.jpg",
    },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-6 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search"
            className="w-full rounded-full bg-gray-800 border-none pl-10 pr-4 text-sm text-white placeholder-gray-400 py-2"
          />
        </div>

        {/* Quick icons */}
        <div className="mb-6 grid grid-cols-4 gap-4 text-center text-xs sm:text-sm font-medium">
          {[
            { icon: Calendar, label: "Bookings" },
            { icon: Gift, label: "Events" },
            { icon: Star, label: "Rewards" },
            { icon: BadgePercent, label: "Badges" },
          ].map(({ icon: Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
              <Icon className="h-5 w-5 text-yellow-400" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Popular homes */}
        <h2 className="mb-4 text-lg font-semibold">Popular homes in...</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="relative bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-28 w-full">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <Heart className="absolute top-2 right-2 h-4 w-4 text-red-500 fill-red-500 bg-white rounded-full p-1" />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium">{hotel.name}</h3>
                <p className="text-xs text-gray-400">{hotel.price} per night</p>
              </div>
            </div>
          ))}
        </div>

        {/* Available Next Month */}
        <h2 className="mb-4 text-lg font-semibold">Available Next Month</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="relative bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-28 w-full">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium">{hotel.name}</h3>
                <p className="text-xs text-gray-400">{hotel.price} per night</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation currentPath="/home" />
      </div>
    </div>
  )
}
