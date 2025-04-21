import Link from "next/link"
import Image from "next/image"
import NewsletterForm from "@/components/home/newsletter-form"

export default function FeaturedSection() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
      <Link
        href="https://www.producthunt.com"
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded-lg p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex-shrink-0">
          <Image src="/product-hunt.svg" alt="Product Hunt" width={40} height={40} />
        </div>
        <div>
          <p className="text-red-500 font-medium">FEATURED ON</p>
          <p className="text-lg font-bold">Product Hunt</p>
        </div>
        <div className="ml-auto bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">419</div>
      </Link>

      <div className="border rounded-lg p-4 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <Image src="/newsletter-icon.svg" alt="Newsletter" width={40} height={40} />
          </div>
          <div>
            <p className="text-blue-500 font-medium">Join The Free</p>
            <p className="text-lg font-bold">Newsletter</p>
          </div>
        </div>
        <NewsletterForm />
      </div>
    </div>
  )
}
