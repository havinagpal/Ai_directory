import type { Video } from "@/lib/types"

// Mock data for development
const mockVideos: Video[] = [
  {
    id: "1",
    title: "How to Use ChatGPT for Business: Complete Tutorial",
    description:
      "Learn how to leverage ChatGPT to improve your business operations, customer service, and content creation.",
    thumbnail: "/images/video-chatgpt.jpg",
    url: "https://example.com/videos/chatgpt-business",
    channel: "AI Business Tips",
    publishedAt: "2025-03-30T15:00:00Z",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Top 10 AI Tools for Content Creators in 2025",
    description: "Discover the best AI tools that can help content creators save time and improve their work quality.",
    thumbnail: "/images/video-content-tools.jpg",
    url: "https://example.com/videos/ai-content-tools",
    channel: "Creator Academy",
    publishedAt: "2025-03-27T12:30:00Z",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Building Your First AI App: Step-by-Step Guide",
    description:
      "A comprehensive tutorial on how to build your first AI application, even if you have no prior experience.",
    thumbnail: "/images/video-ai-app.jpg",
    url: "https://example.com/videos/first-ai-app",
    channel: "Code with AI",
    publishedAt: "2025-03-25T10:15:00Z",
    createdAt: new Date(),
  },
]

export async function getAIVideos() {
  try {
    // In a real app, this would query the database or an external API
    // For now, we'll return mock data
    return mockVideos
  } catch (error) {
    console.error("Error getting AI videos:", error)
    return []
  }
}

