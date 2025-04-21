import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search") || ""
  const categories = searchParams.getAll("categories")
  const pricing = searchParams.getAll("pricing")
  const special = searchParams.getAll("special")
  const sort = searchParams.get("sort") || "newest"

  try {
    const tools = await db.tool.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  { name: { contains: search, mode: "insensitive" } },
                  { description: { contains: search, mode: "insensitive" } },
                ],
              }
            : {},
          categories.length > 0
            ? {
                categories: { hasSome: categories },
              }
            : {},
          pricing.length > 0
            ? {
                pricingModel: { in: pricing },
              }
            : {},
          special.includes("Matt's Picks") ? { isEditorsPick: true } : {},
          special.includes("Special Offer") ? { hasSpecialOffer: true } : {},
        ],
      },
      orderBy:
        sort === "newest"
          ? { createdAt: "desc" }
          : sort === "oldest"
            ? { createdAt: "asc" }
            : sort === "a-z"
              ? { name: "asc" }
              : { name: "desc" },
    })

    return NextResponse.json(tools)
  } catch (error) {
    console.error("Error fetching tools:", error)
    return NextResponse.json({ error: "Failed to fetch tools" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await auth()

  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()

    const tool = await db.tool.create({
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description,
        shortDescription: body.shortDescription,
        image: body.image,
        url: body.url,
        categories: body.categories,
        pricingModel: body.pricingModel,
        isEditorsPick: body.isEditorsPick || false,
        hasSpecialOffer: body.hasSpecialOffer || false,
        isFeatured: body.isFeatured || false,
      },
    })

    return NextResponse.json(tool)
  } catch (error) {
    console.error("Error creating tool:", error)
    return NextResponse.json({ error: "Failed to create tool" }, { status: 500 })
  }
}

