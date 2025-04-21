import ToolCard from "@/components/tools/tool-card"
import type { Tool } from "@/lib/types"

export default function ToolsGrid({ tools }: { tools: Tool[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  )
}

