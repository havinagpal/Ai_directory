import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Tool } from "@/lib/types"

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
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
            <Link href={`/tools/${tool.slug}`} className="text-xl font-semibold hover:text-blue-500">
              {tool.name}
            </Link>
            <Link
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">{tool.shortDescription}</p>

          {tool.isFeatured && (
            <div className="mt-2">
              <Badge variant="outline" className="bg-gray-100 text-gray-800">
                Featured Listing
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

