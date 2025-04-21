import { getToolsAddedToday } from "@/lib/api/tools"
import ToolsGrid from "@/components/tools/tools-grid"

export const metadata = {
  title: "Added Today - FutureTools",
  description: "Discover the latest AI tools added today",
}

export default async function AddedTodayPage() {
  const tools = await getToolsAddedToday()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center">AI Tools Added Today</h1>
      <p className="text-center text-gray-600">
        Discover the latest {tools.length} AI tools added to our directory today
      </p>

      <ToolsGrid tools={tools} />
    </div>
  )
}

