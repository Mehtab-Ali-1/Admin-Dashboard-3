"use client"

import { useState } from "react"
import { FileText, Download } from "lucide-react"
import Button from "../components/Buttons"
import Card from "../components/Card"

const ReportsPage = () => {
  const [reports] = useState([
    { id: 1, name: "Monthly Sales Report", date: "2023-05-01", type: "Sales" },
    { id: 2, name: "Quarterly Financial Statement", date: "2023-04-01", type: "Financial" },
    { id: 3, name: "Customer Satisfaction Survey Results", date: "2023-03-15", type: "Customer" },
    { id: 4, name: "Inventory Status Report", date: "2023-05-10", type: "Inventory" },
    { id: 5, name: "Marketing Campaign Performance", date: "2023-04-20", type: "Marketing" },
  ])

  const downloadReport = (id: number) => {
    // In a real application, this would trigger a download of the report
    console.log(`Downloading report ${id}`)
  }

  return (
    <div className="space-y-6">
      <Card title="Available Reports">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left">Report Name</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Type</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 flex items-center">
                    <FileText size={18} className="mr-2 text-gray-500" />
                    {report.name}
                  </td>
                  <td className="py-4 px-6">{report.date}</td>
                  <td className="py-4 px-6">{report.type}</td>
                  <td className="py-4 px-6">
                    <Button onClick={() => downloadReport(report.id)} variant="secondary">
                      <Download size={18} className="mr-2" />
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Generate Custom Report">
        <form className="space-y-4">
          <div>
            <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
              Report Type
            </label>
            <select
              id="reportType"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>Sales Report</option>
              <option>Financial Statement</option>
              <option>Inventory Report</option>
              <option>Customer Analysis</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
              Date Range
            </label>
            <input
              type="date"
              id="dateRange"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>
          <Button type="submit">Generate Report</Button>
        </form>
      </Card>
    </div>
  )
}

export default ReportsPage

