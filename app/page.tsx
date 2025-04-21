"use client"

import Hero from "@/components/home/hero"
import SearchBar from "@/components/home/search-bar"
import CategoryFilters from "@/components/home/category-filters"
import SpecialFilters from "@/components/home/special-filters"
import FeaturedSection from "@/components/home/featured-section"
import ToolsGrid from "@/components/tools/tools-grid"
import { getTools } from "@/lib/api/tools"

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const search = typeof searchParams.search === "string" ? searchParams.search : ""
  const categories =
    typeof searchParams.categories === "string"
      ? [searchParams.categories]
      : Array.isArray(searchParams.categories)
        ? searchParams.categories
        : []

  const pricing =
    typeof searchParams.pricing === "string"
      ? [searchParams.pricing]
      : Array.isArray(searchParams.pricing)
        ? searchParams.pricing
        : []

  const special =
    typeof searchParams.special === "string"
      ? [searchParams.special]
      : Array.isArray(searchParams.special)
        ? searchParams.special
        : []

  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest"

  const tools = await getTools({ search, categories, pricing, special, sort })

  return (
    <div className="space-y-8">
      <Hero />
      <SearchBar />
      <CategoryFilters />
      <SpecialFilters />
      <FeaturedSection />
      <div className="flex justify-between items-center mt-8">
        <p className="text-gray-700">
          Showing {tools.length} of {tools.length} Total Tools.
        </p>
        <select
          className="border rounded-md p-2"
          defaultValue={sort}
          onChange={(e) => {
            const url = new URL(window.location.href)
            url.searchParams.set("sort", e.target.value)
            window.location.href = url.toString()
          }}
        >
          <option value="newest">Sort (Default - Newest)</option>
          <option value="oldest">Oldest First</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <ToolsGrid tools={tools} />
    </div>
  )
}

