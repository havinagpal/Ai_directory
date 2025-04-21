import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import type { News } from "@/lib/types"

export default function NewsCard({ news }: { news: News }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <Link
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold hover:text-blue-500 line-clamp-2"
        >
          {news.title}
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">{news.summary}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>{news.source}</span>
          <span>{formatDistanceToNow(new Date(news.publishedAt), { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  )
}

