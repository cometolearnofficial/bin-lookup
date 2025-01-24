import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FloatingCircles from "./components/FloatingCircles"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BIN Checker - Credit Card Information Lookup",
  description: "Check credit card BIN information, including card brand, type, issuing bank, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingCircles />
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

