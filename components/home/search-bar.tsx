"use client"

import { useState, type FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams.toString())

    if (searchQuery) {
      params.set("search", searchQuery)
    } else {
      params.delete("search")
    }

    router.push(`/?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search - Try things like "YouTube" or "SEO" to find specific tools for your needs...'
          className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </form>
  )
}

