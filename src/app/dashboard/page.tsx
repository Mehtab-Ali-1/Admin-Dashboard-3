"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"
import Card from "../components/Card"

const DashboardPage = () => {
  const [chartData] = useState([
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 2000, revenue: 9800 },
    { name: "Apr", sales: 2780, revenue: 3908 },
    { name: "May", sales: 1890, revenue: 4800 },
    { name: "Jun", sales: 2390, revenue: 3800 },
  ])

  const [recentOrders] = useState([
    { id: 1, customer: "John Doe", product: "Product A", amount: 100, status: "Completed" },
    { id: 2, customer: "Jane Smith", product: "Product B", amount: 150, status: "Pending" },
    { id: 3, customer: "Bob Johnson", product: "Product C", amount: 200, status: "Processing" },
    { id: 4, customer: "Alice Brown", product: "Product D", amount: 120, status: "Completed" },
    { id: 5, customer: "Charlie Davis", product: "Product E", amount: 180, status: "Shipped" },
  ])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} title="Total Users" value="1,234" change="+10%" color="text-blue-500" />
        <StatCard icon={DollarSign} title="Total Revenue" value="$12,345" change="+5%" color="text-green-500" />
        <StatCard icon={ShoppingCart} title="Total Orders" value="567" change="+15%" color="text-purple-500" />
        <StatCard icon={TrendingUp} title="Conversion Rate" value="3.2%" change="+0.5%" color="text-yellow-500" />
      </div>

      <Card title="Sales Overview">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
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

      <Card title="Recent Orders">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={order.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  color,
}: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; change: string; color: string }) => (
  <Card title={""}>
    <div className="flex items-center">
      <div className={`rounded-full p-3 ${color} bg-opacity-10`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
          {change} from last month
        </p>
      </div>
    </div>
  </Card>
)

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800"
    case "Pending":
      return "bg-yellow-100 text-yellow-800"
    case "Processing":
      return "bg-blue-100 text-blue-800"
    case "Shipped":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default DashboardPage

