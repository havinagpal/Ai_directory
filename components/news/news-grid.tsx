import NewsCard from "@/components/news/news-card"
import type { News } from "@/lib/types"

export default function NewsGrid({ news }: { news: News[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  )
}

