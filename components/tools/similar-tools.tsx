import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Tool } from "@/lib/types"

export default function SimilarTools({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tools.map((tool) => (
        <div key={tool.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-4 flex gap-4">
            <div className="flex-shrink-0 w-1/3">
              <Image
                src={tool.image || "/placeholder.svg"}
                alt={tool.name}
                width={200}
                height={150}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-start justify-between">
                <Link href={`/tools/${tool.slug}`} className="text-lg font-semibold hover:text-blue-500">
                  {tool.name} <ExternalLink className="inline h-3 w-3" />
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">{tool.shortDescription}</p>

              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  {tool.categories[0]}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

