"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const BINSearchTool = () => {
  const [bin, setBin] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (bin.length >= 6) {
      router.push(`/bin-lookup/${bin}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex items-center border-b border-gray-300 py-2">
        <input
          type="text"
          value={bin}
          onChange={(e) => setBin(e.target.value)}
          placeholder="Enter 6-16 digit BIN"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          minLength={6}
          maxLength={16}
          required
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default BINSearchTool

