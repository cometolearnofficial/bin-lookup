import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How To Improve Credit Score With No Credit History",
    excerpt: "A credit history is a record of a person's borrowing and repayment activity, chronicling...",
    date: "April 20, 2024",
    author: "Karia Paul",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bXHj1PtPZWAyU8Dc6X4Oz4MmYO5WrE.png",
    slug: "improve-credit-score",
  },
  {
    id: 2,
    title: "Is It Safe To Invest In REITs? What Are The Risks?",
    excerpt:
      "A Real Estate Investment Trust (REIT) is a company that owns, operates, or finances income-producing properties...",
    date: "April 26, 2024",
    author: "Henry Lee Baker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bXHj1PtPZWAyU8Dc6X4Oz4MmYO5WrE.png",
    slug: "reit-investment-risks",
  },
  {
    id: 3,
    title: "What Are Crypto Apps? Is It Safe To Use A Crypto Wallet?",
    excerpt: "Are you curious about crypto apps and wondering if they're safe to use? You're not alone. Crypto...",
    date: "April 28, 2024",
    author: "Harry Lee Baker",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bXHj1PtPZWAyU8Dc6X4Oz4MmYO5WrE.png",
    slug: "crypto-apps-safety",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
        Featured Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group glassmorphism rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>by {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

