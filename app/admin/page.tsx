"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)

  // Simple client-side check if user is logged in
  // In a real app, this would use a proper auth system
  useEffect(() => {
    const checkAuth = () => {
      // For demo purposes, we'll just set this to true
      // In a real app, you would check session/token
      setIsAuthorized(true)
    }

    checkAuth()
  }, [])

  if (!isAuthorized) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        <h1 className="text-2xl font-bold mb-4">Unauthorized</h1>
        <p className="mb-4">You need to log in to access this page.</p>
        <Button asChild>
          <Link href="/login">Go to Login</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <p className="text-3xl font-bold">4</p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/admin/tools">Manage Tools</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">News</h2>
          <p className="text-3xl font-bold">3</p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/admin/news">Manage News</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Videos</h2>
          <p className="text-3xl font-bold">3</p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/admin/videos">Manage Videos</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Subscribers</h2>
          <p className="text-3xl font-bold">0</p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/admin/subscribers">View Subscribers</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/admin/tools/new">Add New Tool</Link>
          </Button>
          <Button asChild>
            <Link href="/admin/news/new">Add News Article</Link>
          </Button>
          <Button asChild>
            <Link href="/admin/videos/new">Add Video</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
