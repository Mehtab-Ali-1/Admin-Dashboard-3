import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  type?: "button" | "submit" | "reset"
  className?: string
}

const Button = ({ children, onClick, variant = "primary", type = "button", className = "" }: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500"
      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500"

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button

