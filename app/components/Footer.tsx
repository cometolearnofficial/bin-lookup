import Link from "next/link"

const Footer = () => {
  return (
    <footer className="sticky top-0 z-50 glassmorphism shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">BIN Lookup</h3>
            <p className="text-gray-600">Providing accurate credit card information lookup services.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-800">
                  API Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-600 hover:text-gray-800">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
		    <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Pages </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/TermsConditions" className="text-gray-600 hover:text-gray-800">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
			  
                <Link href="/Disclaimer" className="text-gray-600 hover:text-gray-800">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-600">Email: info@binlookupfree.com</p>
            <p className="text-gray-600">Phone: +1 (743) 632-3013</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2025 www.BinlookupFree.com All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

