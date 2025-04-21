"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronDown } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Added Today", href: "/added-today" },
  { name: "AI News", href: "/ai-news" },
  { name: "Videos", href: "/videos" },
]

export default function Header() {
  const pathname = usePathname()
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="FutureTools Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-semibold text-blue-500">Future Tools</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",
                pathname === item.href && "font-medium text-blue-500 dark:text-blue-400",
              )}
            >
              {item.name}
            </Link>
          ))}

          <div className="relative">
            <Button variant="ghost" className="flex items-center gap-1" onClick={() => setHelpOpen(!helpOpen)}>
              Help <ChevronDown className="h-4 w-4" />
            </Button>

            {helpOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setHelpOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setHelpOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setHelpOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

