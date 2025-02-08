"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Briefcase, Calendar, Edit } from "lucide-react"

const ProfilePage = () => {
  const [user] = useState({
    name: "John Doe",
    role: "Senior Administrator",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    department: "IT Management",
    joinDate: "January 2020",
    bio: "Experienced IT professional with a passion for streamlining operations and implementing cutting-edge technologies.",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-48 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="John Doe"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-150 flex items-center">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>
          <p className="text-gray-600 mb-4">{user.role}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ProfileItem icon={Mail} label="Email" value={user.email} />
            <ProfileItem icon={Phone} label="Phone" value={user.phone} />
            <ProfileItem icon={MapPin} label="Location" value={user.location} />
            <ProfileItem icon={Briefcase} label="Department" value={user.department} />
            <ProfileItem icon={Calendar} label="Join Date" value={user.joinDate} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Bio</h2>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileItem = ({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) => (
  <div className="flex items-center">
    <Icon className="w-5 h-5 text-gray-500 mr-2" />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-800">{value}</p>
    </div>
  </div>
)

export default ProfilePage

