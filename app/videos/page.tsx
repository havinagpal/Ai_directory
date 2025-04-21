import { getAIVideos } from "@/lib/api/videos"
import VideosGrid from "@/components/videos/videos-grid"

export const metadata = {
  title: "AI Videos - FutureTools",
  description: "Watch the latest AI tool tutorials and reviews",
}

export default async function VideosPage() {
  const videos = await getAIVideos()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">AI Videos</h1>
      <p className="text-center text-gray-600">Watch tutorials, reviews, and demos of the latest AI tools</p>

      <VideosGrid videos={videos} />
    </div>
  )
}

