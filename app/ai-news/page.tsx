import { getAINews } from "@/lib/api/news"
import NewsGrid from "@/components/news/news-grid"

export const metadata = {
  title: "AI News - FutureTools",
  description: "Latest news and updates from the AI world",
}

export default async function AINewsPage() {
  const news = await getAINews()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">AI News</h1>
      <p className="text-center text-gray-600">Stay updated with the latest news and developments in the AI world</p>

      <NewsGrid news={news} />
    </div>
  )
}

