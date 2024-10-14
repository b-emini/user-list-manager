import { User } from '@/app/types/user';
import { useUserStore } from '../lib/store/useUserStore';

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UserList = ({ users, onDelete }: UserListProps) => {
    const { setFormData, setSelectedUserId } = useUserStore();

    const handleEdit = (user:User) => {
      setFormData({ name: user.name, email: user.email, phone: user.phone });
      setSelectedUserId(user.id);
    };
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }
  
  return (
    <div className="flex flex-col space-y-4 mt-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
        >
          <div>
            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
          <div className="space-x-4">
          <button
                  onClick={() => handleEdit(user)}
                  className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100"
                >
                  Edit
                </button>
          <button
            onClick={() => onDelete(user.id)}
            className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-100"
          >
            Delete
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;