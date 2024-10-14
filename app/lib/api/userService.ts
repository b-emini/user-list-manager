import { User } from '@/app/types/user';

const API_URL = 'http://localhost:3001/users';


export const fetchUsers = (page: number, search: string) => {
  return fetch(`${API_URL}?_page=${page}&_limit=10&name_like=${search}`).then((res) => res.json());
};

export const addUser = (user: Omit<User, 'id'>) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const updateUser = (id: number, user: Omit<User, 'id'>) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const deleteUser = (id: number) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};