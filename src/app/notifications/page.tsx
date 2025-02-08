"use client"

import { useState } from "react"
import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react"

const NotificationsPage = () => {
  const [notifications] = useState([
    { id: 1, type: "info", message: "New feature added: Dark mode is now available!", date: "2023-05-15" },
    { id: 2, type: "success", message: "Your last report was successfully generated.", date: "2023-05-14" },
    { id: 3, type: "warning", message: "Your subscription will expire in 3 days.", date: "2023-05-13" },
    { id: 4, type: "error", message: "Failed to process last transaction. Please try again.", date: "2023-05-12" },
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case "info":
        return <Info className="w-6 h-6 text-blue-500" />
      case "success":
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case "warning":
        return <AlertCircle className="w-6 h-6 text-yellow-500" />
      case "error":
        return <AlertCircle className="w-6 h-6 text-red-500" />
      default:
        return <Bell className="w-6 h-6 text-gray-500" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex-shrink-0 mr-4">{getIcon(notification.type)}</div>
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationsPage

