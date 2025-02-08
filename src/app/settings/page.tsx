"use client"

import { useState, useEffect } from "react"
import { Save, Moon, Sun } from "lucide-react"
import { useRouter } from "next/navigation"
import Card from "../components/Card"

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    siteName: "My Awesome Admin Dashboard",
    siteDescription: "A powerful admin dashboard for managing your business",
    emailNotifications: true,
    darkMode: false,
    language: "en",
    timezone: "UTC",
    twoFactorAuth: false,
    dataRetentionDays: 30,
  })

  const router = useRouter()

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("dashboardSettings")
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }

    // Apply dark mode based on saved settings
    if (JSON.parse(savedSettings || "{}").darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Saving settings:", settings)

    // Save settings to localStorage
    localStorage.setItem("dashboardSettings", JSON.stringify(settings))

    // Apply dark mode
    if (settings.darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Show a success message (you can replace this with a more sophisticated notification system)
    alert("Settings saved successfully!")

    // Refresh the page to apply changes
    router.refresh()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card title="General Settings">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Site Name
            </label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Site Description
            </label>
            <textarea
              id="siteDescription"
              name="siteDescription"
              rows={3}
              value={settings.siteDescription}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              Enable Email Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="darkMode" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              Enable Dark Mode
            </label>
            {settings.darkMode ? (
              <Moon className="ml-2 h-5 w-5 text-gray-400" />
            ) : (
              <Sun className="ml-2 h-5 w-5 text-yellow-400" />
            )}
          </div>
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Language
            </label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Timezone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Standard Time</option>
              <option value="CST">Central Standard Time</option>
              <option value="PST">Pacific Standard Time</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="twoFactorAuth"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="twoFactorAuth" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              Enable Two-Factor Authentication
            </label>
          </div>
          <div>
            <label htmlFor="dataRetentionDays" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Data Retention (days)
            </label>
            <input
              type="number"
              id="dataRetentionDays"
              name="dataRetentionDays"
              value={settings.dataRetentionDays}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Save className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Save Settings
          </button>
        </form>
      </Card>
    </div>
  )
}

export default SettingsPage

