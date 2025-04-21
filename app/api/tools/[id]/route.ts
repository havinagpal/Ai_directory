import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const tool = await db.tool.findUnique({
      where: { id: params.id },
    })

    if (!tool) {
      return NextResponse.json({ error: "Tool not found" }, { status: 404 })
    }

    return NextResponse.json(tool)
  } catch (error) {
    console.error("Error fetching tool:", error)
    return NextResponse.json({ error: "Failed to fetch tool" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const session = await auth()

  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()

    const tool = await db.tool.update({
      where: { id: params.id },
      data: {
        name: body.name,
        slug: body.slug,
        description: body.description,
        shortDescription: body.shortDescription,
        image: body.image,
        url: body.url,
        categories: body.categories,
        pricingModel: body.pricingModel,
        isEditorsPick: body.isEditorsPick,
        hasSpecialOffer: body.hasSpecialOffer,
        isFeatured: body.isFeatured,
      },
    })

    return NextResponse.json(tool)
  } catch (error) {
    console.error("Error updating tool:", error)
    return NextResponse.json({ error: "Failed to update tool" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const session = await auth()

  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    await db.tool.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting tool:", error)
    return NextResponse.json({ error: "Failed to delete tool" }, { status: 500 })
  }
}

