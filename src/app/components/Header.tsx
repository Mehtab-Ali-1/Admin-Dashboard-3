"use client"

import { Bell, User, LogOut, Search, Settings } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/login")
  }

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="max-md:pl-12 max-sm:pl-9 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Dashboard
          </h2>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className={`bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${
                isSearchOpen ? "w-64" : "w-0"
              }`}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/notifications"
            className="relative p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3
            </span>
          </Link>
          <Link
            href="/profile"
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          >
            <User className="w-6 h-6" />
            <span className="hidden md:inline">John Doe</span>
          </Link>
          <Link href="/settings" className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
            <Settings className="w-6 h-6" />
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
          >
            <LogOut className="w-6 h-6" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

