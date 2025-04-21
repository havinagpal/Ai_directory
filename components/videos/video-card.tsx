import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Play } from "lucide-react"
import type { Video } from "@/lib/types"

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="relative h-48">
          <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-60 rounded-full p-3">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold hover:text-blue-500 line-clamp-2"
        >
          {video.title}
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">{video.description}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>{video.channel}</span>
          <span>{formatDistanceToNow(new Date(video.publishedAt), { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  )
}

