"use client"
import { useEffect, useState } from 'react';
import { useUserStore } from './lib/store/useUserStore';
import { useDeleteUser, useUsers } from './lib/api/userHooks';
import SearchBar from './components/search-bar';
import UserForm from './components/user-form';
import UserList from './components/user-list';
import Pagination from './components/pagination';

const UserListPage = () => {
  const [page, setPage] = useState(1);
  const { searchQuery } = useUserStore();
  const { data: users = [], isLoading, isError, refetch } = useUsers(page, searchQuery);
  const deleteUserMutation = useDeleteUser();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching users...</p>;

  return (
    <div className="container mx-auto p-6">
      <SearchBar />
      <UserForm />
      <UserList users={users} onDelete={(id) => deleteUserMutation.mutate(id)} />
      <Pagination currentPage={page} onPageChange={(newPage) => setPage(newPage)} />
    </div>
  );
};

export default UserListPage;