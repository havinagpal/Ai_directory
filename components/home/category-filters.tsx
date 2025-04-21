"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const categories = [
  "AI Detection",
  "Aggregators",
  "Avatar",
  "Chat",
  "Copywriting",
  "Finance",
  "For Fun",
  "Gaming",
  "Generative Art",
  "Generative Code",
  "Generative Video",
  "Image Improvement",
  "Image Scanning",
  "Inspiration",
  "Marketing",
  "Motion Capture",
  "Music",
  "Podcasting",
  "Productivity",
  "Prompt Guides",
  "Research",
  "Self-Improvement",
  "Social Media",
  "Speech-To-Text",
  "Text-To-Speech",
  "Text-To-Video",
  "Translation",
  "Video Editing",
  "Voice Modulation",
]

export default function CategoryFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedCategories = searchParams.getAll("categories")

  const toggleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedCategories.includes(category)) {
      const filtered = selectedCategories.filter((c) => c !== category)
      params.delete("categories")
      filtered.forEach((c) => params.append("categories", c))
    } else {
      params.append("categories", category)
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-2">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`category-${category}`}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => toggleCategory(category)}
            />
            <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
              {category}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

