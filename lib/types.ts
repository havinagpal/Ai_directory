export interface Tool {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  image: string
  url: string
  categories: string[]
  pricingModel: string
  upvotes: number
  isEditorsPick: boolean
  hasSpecialOffer: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface News {
  id: string
  title: string
  summary: string
  content: string
  image: string
  url: string
  source: string
  publishedAt: string
  createdAt: Date
}

export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  url: string
  channel: string
  publishedAt: string
  createdAt: Date
}

