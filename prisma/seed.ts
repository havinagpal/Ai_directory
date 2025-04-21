import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hash("admin123", 10)
  await prisma.user.upsert({
    where: { email: "admin@futuretools.com" },
    update: {},
    create: {
      email: "admin@futuretools.com",
      name: "Admin User",
      password: adminPassword,
      role: "ADMIN",
    },
  })

  // Create tools
  const tools = [
    {
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
      isEditorsPick: false,
      hasSpecialOffer: false,
      isFeatured: true,
    },
    {
      name: "MindStudio",
      slug: "mindstudio",
      description:
        "A no-code platform for building custom, model-agnostic AI applications without any programming knowledge.",
      shortDescription: "A no-code platform for building custom, model-agnostic AI applications.",
      image: "/images/mindstudio.png",
      url: "https://mindstudio.ai",
      categories: ["Productivity", "AI Development"],
      pricingModel: "Freemium",
      isEditorsPick: true,
      hasSpecialOffer: false,
      isFeatured: true,
    },
    {
      name: "Higgsfield",
      slug: "higgsfield",
      description:
        "An advanced AI tool that creates lifelike human videos from text prompts, perfect for marketing and educational content.",
      shortDescription: "A tool to create lifelike human videos.",
      image: "/images/higgsfield.png",
      url: "https://higgsfield.ai",
      categories: ["Generative Video", "Marketing"],
      pricingModel: "Paid",
      isEditorsPick: false,
      hasSpecialOffer: true,
      isFeatured: false,
    },
    {
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
      isEditorsPick: false,
      hasSpecialOffer: false,
      isFeatured: false,
    },
  ]

  for (const tool of tools) {
    await prisma.tool.upsert({
      where: { slug: tool.slug },
      update: {},
      create: {
        ...tool,
        upvotes: Math.floor(Math.random() * 10),
      },
    })
  }

  console.log("Database has been seeded!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
