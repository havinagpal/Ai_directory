"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const pricingOptions = ["Free", "Freemium", "GitHub", "Google Colab", "Open Source", "Paid"]
const specialOptions = ["Matt's Picks", "Special Offer"]

export default function SpecialFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedPricing = searchParams.getAll("pricing")
  const selectedSpecial = searchParams.getAll("special")

  const togglePricing = (option: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedPricing.includes(option)) {
      const filtered = selectedPricing.filter((c) => c !== option)
      params.delete("pricing")
      filtered.forEach((c) => params.append("pricing", c))
    } else {
      params.append("pricing", option)
    }

    router.push(`/?${params.toString()}`)
  }

  const toggleSpecial = (option: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedSpecial.includes(option)) {
      const filtered = selectedSpecial.filter((c) => c !== option)
      params.delete("special")
      filtered.forEach((c) => params.append("special", c))
    } else {
      params.append("special", option)
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-2 mb-4">
        {pricingOptions.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`pricing-${option}`}
              checked={selectedPricing.includes(option)}
              onCheckedChange={() => togglePricing(option)}
            />
            <Label htmlFor={`pricing-${option}`} className="text-sm cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-8">
        {specialOptions.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`special-${option}`}
              checked={selectedSpecial.includes(option)}
              onCheckedChange={() => toggleSpecial(option)}
            />
            <Label htmlFor={`special-${option}`} className="text-sm cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

