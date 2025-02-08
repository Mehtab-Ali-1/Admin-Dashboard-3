"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("isLoggedIn")
      setIsLoggedIn(loginStatus === "true")
    }

    const checkDarkMode = () => {
      const savedSettings = localStorage.getItem("dashboardSettings")
      if (savedSettings) {
        const { darkMode } = JSON.parse(savedSettings)
        setIsDarkMode(darkMode)
      }
    }

    checkLoginStatus()
    checkDarkMode()

    if (!isLoggedIn && pathname !== "/login") {
      router.push("/login")
    }
  }, [isLoggedIn, pathname, router])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  if (!isLoggedIn && pathname !== "/login") {
    return null // or a loading spinner
  }

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {isLoggedIn ? (
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-6 py-8">{children}</div>
              </main>
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  )
}

