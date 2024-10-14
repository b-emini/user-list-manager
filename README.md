# User List Manager

This application is a simple user management system built with Next.js, demonstrating CRUD (Create, Read, Update, Delete) operations and search functionality. It utilizes a mock API powered by Express.js and leverages state management with Zustand and data fetching/caching with React Query. 

## Technologies Used

- **Frontend:**
    - Next.js (v14.2.15)
    - React (v18)
    - React Query (v3.39.3 / v5.59.13) - For data fetching, caching, and state management related to server interactions
    - Zustand (v5.0.0-rc.2) - For lightweight global state management
    - React Query Devtools (v5.59.13) - For debugging React Query (optional)
- **Backend (Mock API):**
    - Express.js - For creating the mock API
    - Node.js
## Features

- **View User List:** Display a list of users with their details.
- **Create User:** Add new users to the list.
- **Update User:** Modify existing user information.
- **Delete User:** Remove users from the list.
- **Search Users:** Filter users by name or email. 
- **Pagination:**  Browse users across multiple pages if the list is large.




- **`app`:** Contains the main application logic.
    - **`api`:**  Handles API routes using Next.js API routes.
    - **`components`:** Reusable React components. 
        - `UserForm.tsx`: Handles both creating and updating users.
        - `UserList.tsx`:  Displays the list of users. 
        - `SearchBar.tsx`: Allows users to search for specific users.
    - **`lib`:** Contains helper functions and utilities.
        - `api/userApi.ts`: Contains functions for making API requests related to users.
        - `store/useUserStore.ts`: Manages global state using Zustand, such as the search query.
    - **`page.tsx`: The root page component, likely rendering the user list.
- **`pages/api/users`:**  Example directory for Next.js API routes if handling API logic there.
- **`public`:** Static assets like images, fonts, etc.
- **`styles`:**  CSS files for styling the application.
- **`server.js`:** Sets up the Express.js server for the mock API. 

## Installation and Running

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/b-emini/user-list-manager (private atm)
   cd user-list-manager
        npm install
        npm run dev
    cd mock-api-server
        npm install
        npm run dev 
