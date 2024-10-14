import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addUser, deleteUser, fetchUsers, updateUser } from './userService';
import { User } from '@/app/types/user';

export const useUsers = (page: number, search: string) => {    
    return useQuery<User[]>(['users', page, search], () => fetchUsers(page, search), {
        keepPreviousData: true, 
        staleTime: 0,
        cacheTime: 0 
      });
};

export const useAddUser = () => {
    const queryClient = useQueryClient();
  
    return useMutation((user: Omit<User, 'id'>) => addUser(user), {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
      onError: (error) => {
        console.error("Error adding user:", error);
      },
    });
  };

  export const useUpdateUser = () => {
    const queryClient = useQueryClient();
  
    return useMutation(({ id, user }: { id: number; user: Omit<User, 'id'> }) => updateUser(id, user), {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
      onError: (error) => {
        console.error("Error updating user:", error);
      },
    });
  };


  export const useDeleteUser = () => {
    const queryClient = useQueryClient();
  
    return useMutation((id: number) => deleteUser(id), {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
      onError: (error) => {
        console.error("Error deleting user:", error);
      },
    });
  };