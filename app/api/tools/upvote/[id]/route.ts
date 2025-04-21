import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const tool = await db.tool.update({
      where: { id: params.id },
      data: {
        upvotes: { increment: 1 },
      },
    })

    return NextResponse.json({ upvotes: tool.upvotes })
  } catch (error) {
    console.error("Error upvoting tool:", error)
    return NextResponse.json({ error: "Failed to upvote tool" }, { status: 500 })
  }
}

