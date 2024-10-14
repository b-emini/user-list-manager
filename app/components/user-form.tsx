import { useState, useEffect } from 'react';
import { useAddUser, useUpdateUser } from '../lib/api/userHooks';
import { useUserStore } from '../lib/store/useUserStore';

const UserForm = () => {
  const { formData, setFormData, selectedUserId, setSelectedUserId } = useUserStore();
  const addUserMutation = useAddUser();
  const updateUserMutation = useUpdateUser();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (selectedUserId) {
      updateUserMutation.mutate({ id: selectedUserId, user: formData });
    } else {
      addUserMutation.mutate(formData);
    }
    setFormData({ name: '', email: '', phone: '' });
    setSelectedUserId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 border rounded-lg bg-gray-100 shadow-lg text-gray-700">
      <div>
        <label className="block  text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter name"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block  text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter email"
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block  text-sm font-bold mb-2">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Enter phone"
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {selectedUserId ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;