import Image from "next/image"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="max-w-md w-full space-y-8 p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl">
        <div>
          <Image
            className="mx-auto h-32 w-auto"
            src="/logo1.png"
            alt="Your Admin Dashboard Logo"
            width={80}
            height={80}
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Your Admin Dashboard</h2>
          <p className="mt-2 text-center text-sm text-indigo-200">Sign in to access your dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage

