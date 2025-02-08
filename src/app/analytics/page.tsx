"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import Card from "../components/Card"

const AnalyticsPage = () => {
  const [data] = useState([
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 2000, revenue: 9800 },
    { name: "Apr", sales: 2780, revenue: 3908 },
    { name: "May", sales: 1890, revenue: 4800 },
    { name: "Jun", sales: 2390, revenue: 3800 },
  ])

  return (
    <div className="space-y-6">
      <Card title="Sales and Revenue Overview">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Top Selling Products">
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Product A</span>
              <span className="font-semibold">1,234 units</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Product B</span>
              <span className="font-semibold">987 units</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Product C</span>
              <span className="font-semibold">765 units</span>
            </li>
          </ul>
        </Card>

        <Card title="Revenue by Category">
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Electronics</span>
              <span className="font-semibold">$12,345</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Clothing</span>
              <span className="font-semibold">$9,876</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Home & Garden</span>
              <span className="font-semibold">$7,654</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default AnalyticsPage

