import { UserTable } from "./components/user-table";
import { initialUsers } from "./data";

export default function UsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Users</h1>
      <UserTable initialData={initialUsers} />
    </div>
  )
}

