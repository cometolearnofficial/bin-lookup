import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding BIN Lookup: How It Works & Why It Matters",
    excerpt: "BIN lookup helps identify the issuing bank and card type, ensuring secure transactions...",
    date: "February 1, 2025",
    author: "John Doe",
    image: "/images/bin-lookup.jpg",
    slug: "bin-lookup-guide",
  },
  {
    id: 2,
    title: "How Credit Card Fraud Happens & Ways to Prevent It",
    excerpt: "Credit card fraud is on the rise. Learn how criminals steal data and how to stay protected...",
    date: "February 3, 2025",
    author: "Jane Smith",
    image: "/images/credit-fraud.jpg",
    slug: "credit-card-fraud-prevention",
  },
  {
    id: 3,
    title: "The Future of Banking: Digital vs Traditional Banks",
    excerpt: "Are digital banks the future? Explore the pros and cons of online banking versus brick-and-mortar banks...",
    date: "February 5, 2025",
    author: "Alex Johnson",
    image: "/images/digital-banking.jpg",
    slug: "future-of-banking",
  },
  {
    id: 4,
    title: "New Digital Currencies: Will They Replace the US Dollar?",
    excerpt: "Cryptocurrencies and digital assets are gaining popularity. Could they challenge the dominance of the US dollar?...",
    date: "February 7, 2025",
    author: "Michael Lee",
    image: "/images/digital-currencies.jpg",
    slug: "new-currency-vs-usd",
  },
  {
    id: 5,
    title: "Why The US Government Is Cracking Down on Bitcoin",
    excerpt: "Bitcoin is facing increasing scrutiny from US regulators. What does this mean for crypto investors?...",
    date: "February 9, 2025",
    author: "Sarah Carter",
    image: "/images/bitcoin-conflict.jpg",
    slug: "us-vs-bitcoin",
  },
  {
    id: 6,
    title: "How to Check If a Credit Card Is Valid with BIN Lookup",
    excerpt: "Learn how BIN lookup tools verify credit card details and prevent fraud...",
    date: "February 11, 2025",
    author: "David Brown",
    image: "/images/bin-check.jpg",
    slug: "bin-lookup-validation",
  },
  {
    id: 7,
    title: "Will Bitcoin Ever Become a Legal Tender in the USA?",
    excerpt: "Bitcoin adoption is growing, but will the US ever accept it as an official currency?...",
    date: "February 13, 2025",
    author: "Emma Wilson",
    image: "/images/bitcoin-legal.jpg",
    slug: "bitcoin-legal-usa",
  },
  {
    id: 8,
    title: "How The US Dollar Maintains Global Economic Power",
    excerpt: "The US dollar is the world's reserve currency. Discover the factors that keep it dominant...",
    date: "February 15, 2025",
    author: "Robert White",
    image: "/images/us-dollar.jpg",
    slug: "us-dollar-power",
  },
  {
    id: 9,
    title: "The Role of AI in Fraud Detection & Banking Security",
    excerpt: "Artificial intelligence is transforming how banks detect fraud and secure transactions...",
    date: "February 17, 2025",
    author: "Sophia Green",
    image: "/images/ai-banking.jpg",
    slug: "ai-fraud-detection",
  },
  {
    id: 10,
    title: "Crypto Regulations: How Different Countries Are Responding",
    excerpt: "Governments worldwide are creating policies for cryptocurrencies. See how different nations regulate crypto...",
    date: "February 19, 2025",
    author: "Liam Martinez",
    image: "/images/crypto-regulations.jpg",
    slug: "crypto-regulations",
  },
];

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
  );
}
