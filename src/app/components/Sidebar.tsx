"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, ShoppingCart, BarChart, Settings, PieChart, FileText, Menu, X } from "lucide-react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-800 text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <div
        className={`bg-white text-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-10 shadow-lg md:shadow-none`}
      >
        <Link href="/" className="flex items-center space-x-2 px-4">
          <BarChart className="w-8 h-8 text-indigo-600" />
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Admin
          </span>
        </Link>
        <nav className="space-y-2">
          <NavItem href="/dashboard" icon={Home} text="Dashboard" isActive={isActive("/dashboard")} />
          <NavItem href="/users" icon={Users} text="Users" isActive={isActive("/users")} />
          <NavItem href="/products" icon={ShoppingCart} text="Products" isActive={isActive("/products")} />
          <NavItem href="/analytics" icon={PieChart} text="Analytics" isActive={isActive("/analytics")} />
          <NavItem href="/reports" icon={FileText} text="Reports" isActive={isActive("/reports")} />
          <NavItem href="/settings" icon={Settings} text="Settings" isActive={isActive("/settings")} />
        </nav>
      </div>
    </>
  )
}

const NavItem = ({
  href,
  icon: Icon,
  text,
  isActive,
}: { href: string; icon: React.ComponentType<{ className?: string }>; text: string; isActive: boolean }) => (
  <Link
    href={href}
    className={`flex items-center space-x-2 px-4 py-2.5 rounded transition duration-200 hover:bg-indigo-100 hover:text-indigo-800 ${
      isActive ? "bg-indigo-100 text-indigo-800" : "text-gray-600"
    }`}
  >
    <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-indigo-600 scale-110" : ""}`} />
    <span className={`transition-all duration-300 ${isActive ? "font-semibold" : ""}`}>{text}</span>
  </Link>
)

export default Sidebar

