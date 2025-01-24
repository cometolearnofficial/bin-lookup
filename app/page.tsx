import BINSearchTool from "../components/BINSearchTool"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">BIN Lookup Free</h1>
      <p className="text-center text-xl mb-8">
        Enter the first 6-16 digits of a credit card number to get detailed information.
      </p>
      <BINSearchTool />
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="sticky top-0 z-50 glassmorphism shadow-md">
            <h3 className="text-xl font-semibold mb-2">BIN Lookup</h3>
            <p className="text-gray-600 mb-4">Get detailed information about credit cards using their BIN.</p>
            <Link href="/examples" className="text-blue-500 hover:text-blue-700">
              View Examples
            </Link>
          </div>
          <div className="sticky top-0 z-50 glassmorphism shadow-md">
            <h3 className="text-xl font-semibold mb-2">API Access</h3>
            <p className="text-gray-600 mb-4">Integrate our BIN checking service into your own applications.</p>
            <Link href="/pricing" className="text-blue-500 hover:text-blue-700">
              View Pricing
            </Link>
          </div>
          <div className="sticky top-0 z-50 glassmorphism shadow-md">
            <h3 className="text-xl font-semibold mb-2">Blog</h3>
            <p className="text-gray-600 mb-4">Stay updated with the latest news and information about BIN checking.</p>
            <Link href="/blog" className="text-blue-500 hover:text-blue-700">
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

