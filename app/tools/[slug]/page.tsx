import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getToolBySlug, getSimilarTools } from "@/lib/api/tools"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ThumbsUp, Twitter, Facebook } from "lucide-react"
import SimilarTools from "@/components/tools/similar-tools"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = await getToolBySlug(params.slug)

  if (!tool) {
    return {
      title: "Tool Not Found - FutureTools",
    }
  }

  return {
    title: `${tool.name} - FutureTools`,
    description: tool.shortDescription,
  }
}

export default async function ToolPage({ params }: { params: { slug: string } }) {
  const tool = await getToolBySlug(params.slug)

  if (!tool) {
    notFound()
  }

  const similarTools = await getSimilarTools(tool.id, tool.categories)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center my-10">{tool.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg overflow-hidden">
          <Image
            src={tool.image || "/placeholder.svg"}
            alt={tool.name}
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Description:</h2>
            <p className="text-gray-700">{tool.description}</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Pricing Model:</h3>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
              {tool.pricingModel}
            </Badge>
          </div>

          <div>
            <h3 className="font-medium mb-1">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {tool.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <Button asChild className="w-full bg-blue-400 hover:bg-blue-500">
            <Link href={tool.url} target="_blank" rel="noopener noreferrer">
              Visit {tool.name} <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" className="w-full">
            Suggest Changes
          </Button>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex flex-col items-center">
          <Button variant="outline" size="icon" className="rounded-full">
            <ThumbsUp className="h-5 w-5" />
          </Button>
          <span className="mt-1">{tool.upvotes}</span>
          <span className="text-xs text-gray-500">Upvote</span>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Share This Tool:</h2>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Twitter className="h-5 w-5 text-blue-400" />
            Twitter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Facebook className="h-5 w-5 text-blue-600" />
            Facebook
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Similar AI Tools:</h2>
        <SimilarTools tools={similarTools} />
      </div>
    </div>
  )
}

