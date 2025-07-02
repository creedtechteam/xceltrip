"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import BottomNavigation from "@/components/bottom-navigation"

interface PlanScreenProps {
  onNavigate: (screen: string) => void
}

export default function PlanScreen({ onNavigate }: PlanScreenProps) {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      features: ["5 bookings per month", "Basic support", "Standard rewards"],
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/month",
      features: ["Unlimited bookings", "Priority support", "Premium rewards", "Exclusive deals"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$39.99",
      period: "/month",
      features: ["Everything in Premium", "Business tools", "Custom support", "Advanced analytics"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <div className="flex-1 p-4">
        <h1 className="mb-6 text-xl font-semibold">Choose Your Plan</h1>

        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border p-6 ${
                plan.popular ? "border-yellow-500 bg-yellow-500/10" : "border-gray-700 bg-gray-800"
              }`}
            >
              {plan.popular && <div className="mb-2 text-sm font-medium text-yellow-500">Most Popular</div>}

              <div className="mb-4">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular ? "bg-yellow-500 text-black hover:bg-yellow-600" : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation currentScreen="plan" onNavigate={onNavigate} />
    </div>
  )
}
