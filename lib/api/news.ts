import type { News } from "@/lib/types"

// Mock data for development
const mockNews: News[] = [
  {
    id: "1",
    title: "OpenAI Announces GPT-5 with Enhanced Reasoning Capabilities",
    summary: "The latest model shows significant improvements in logical reasoning and problem-solving abilities.",
    content:
      "OpenAI has unveiled GPT-5, the next iteration of its powerful language model. The new version demonstrates remarkable improvements in logical reasoning, mathematical problem-solving, and code generation. According to OpenAI, GPT-5 scored in the 99th percentile on various standardized tests, outperforming its predecessors by a significant margin.",
    image: "/images/news-gpt5.jpg",
    url: "https://example.com/news/openai-gpt5",
    source: "AI Insider",
    publishedAt: "2025-04-01T10:00:00Z",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Google Introduces New AI Image Generation Model with Unprecedented Quality",
    summary: "The new model can create photorealistic images from text descriptions with remarkable accuracy.",
    content:
      "Google has announced a breakthrough in AI image generation technology. Their new model, called ImageMaster, can create photorealistic images from text descriptions with unprecedented quality and accuracy. The model was trained on a diverse dataset of billions of images and can generate images in various styles, from photorealistic to artistic.",
    image: "/images/news-google-image.jpg",
    url: "https://example.com/news/google-imagemaster",
    source: "Tech Chronicle",
    publishedAt: "2025-03-28T14:30:00Z",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "AI Tool Helps Small Businesses Compete with Industry Giants",
    summary: "New affordable AI suite levels the playing field for small businesses in digital marketing.",
    content:
      "A new AI-powered marketing suite designed specifically for small businesses is helping them compete with industry giants. The tool, called MarketingAI, offers affordable access to advanced AI capabilities for content creation, SEO optimization, and customer targeting. Early adopters report significant increases in engagement and conversion rates.",
    image: "/images/news-small-business.jpg",
    url: "https://example.com/news/ai-small-business",
    source: "Business Tech Today",
    publishedAt: "2025-03-25T09:15:00Z",
    createdAt: new Date(),
  },
]

export async function getAINews() {
  try {
    // In a real app, this would query the database or an external API
    // For now, we'll return mock data
    return mockNews
  } catch (error) {
    console.error("Error getting AI news:", error)
    return []
  }
}

