import type { Tool } from "@/lib/types"

// Mock data for development
const mockTools: Tool[] = [
  {
    id: "1",
    name: "Microsoft Teams Free",
    slug: "microsoft-teams-free",
    description:
      "Microsoft Teams Free empowers entrepreneurs, small businesses, and individuals to collaborate seamlessly. Enjoy unlimited chat, 60-minute video meetings, file sharing with 5GB OneDrive storage, and robust security, all without spending a dime. Connect your team or community effortlessly.",
    shortDescription:
      "Microsoft Teams Free is a unified collaboration platform that helps you connect, chat, meet, and share files with anyone, anytime—completely free.",
    image: "/images/microsoft-teams.png",
    url: "https://www.microsoft.com/teams/free",
    categories: ["Productivity"],
    pricingModel: "Free",
    upvotes: 1,
    isEditorsPick: false,
    hasSpecialOffer: false,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "MindStudio",
    slug: "mindstudio",
    description:
      "A no-code platform for building custom, model-agnostic AI applications without any programming knowledge.",
    shortDescription: "A no-code platform for building custom, model-agnostic AI applications.",
    image: "/images/mindstudio.png",
    url: "https://mindstudio.ai",
    categories: ["Productivity", "AI Development"],
    pricingModel: "Freemium",
    upvotes: 5,
    isEditorsPick: true,
    hasSpecialOffer: false,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Higgsfield",
    slug: "higgsfield",
    description:
      "An advanced AI tool that creates lifelike human videos from text prompts, perfect for marketing and educational content.",
    shortDescription: "A tool to create lifelike human videos.",
    image: "/images/higgsfield.png",
    url: "https://higgsfield.ai",
    categories: ["Generative Video", "Marketing"],
    pricingModel: "Paid",
    upvotes: 3,
    isEditorsPick: false,
    hasSpecialOffer: true,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Idea Screening Lab",
    slug: "idea-screening-lab",
    description:
      "A powerful tool that validates business concepts by analyzing them against Google SEO keywords to assess market demand and potential.",
    shortDescription:
      "A tool to validate business concepts by matching them against Google SEO keywords to assess market demand.",
    image: "/images/idea-screening-lab.png",
    url: "https://ideascreeninglab.com",
    categories: ["Marketing", "Research"],
    pricingModel: "Freemium",
    upvotes: 7,
    isEditorsPick: false,
    hasSpecialOffer: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export async function getTools({
  search = "",
  categories = [],
  pricing = [],
  special = [],
  sort = "newest",
}: {
  search?: string
  categories?: string[]
  pricing?: string[]
  special?: string[]
  sort?: string
}) {
  try {
    // In a real app, this would query the database
    // For now, we'll filter the mock data
    let filteredTools = [...mockTools]

    if (search) {
      const searchLower = search.toLowerCase()
      filteredTools = filteredTools.filter(
        (tool) => tool.name.toLowerCase().includes(searchLower) || tool.description.toLowerCase().includes(searchLower),
      )
    }

    if (categories.length > 0) {
      filteredTools = filteredTools.filter((tool) => categories.some((cat) => tool.categories.includes(cat)))
    }

    if (pricing.length > 0) {
      filteredTools = filteredTools.filter((tool) => pricing.includes(tool.pricingModel))
    }

    if (special.includes("Matt's Picks")) {
      filteredTools = filteredTools.filter((tool) => tool.isEditorsPick)
    }

    if (special.includes("Special Offer")) {
      filteredTools = filteredTools.filter((tool) => tool.hasSpecialOffer)
    }

    // Sort tools
    if (sort === "newest") {
      filteredTools.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    } else if (sort === "oldest") {
      filteredTools.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
    } else if (sort === "a-z") {
      filteredTools.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === "z-a") {
      filteredTools.sort((a, b) => b.name.localeCompare(a.name))
    }

    return filteredTools
  } catch (error) {
    console.error("Error getting tools:", error)
    return []
  }
}

export async function getToolBySlug(slug: string) {
  try {
    // In a real app, this would query the database
    return mockTools.find((tool) => tool.slug === slug) || null
  } catch (error) {
    console.error("Error getting tool by slug:", error)
    return null
  }
}

export async function getSimilarTools(toolId: string, categories: string[]) {
  try {
    // In a real app, this would query the database
    // For now, we'll filter the mock data
    return mockTools
      .filter((tool) => tool.id !== toolId && tool.categories.some((cat) => categories.includes(cat)))
      .slice(0, 2)
  } catch (error) {
    console.error("Error getting similar tools:", error)
    return []
  }
}

export async function getToolsAddedToday() {
  try {
    // In a real app, this would query the database
    // For now, we'll return some mock data
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return mockTools.filter((tool) => tool.createdAt >= today)
  } catch (error) {
    console.error("Error getting tools added today:", error)
    return []
  }
}

