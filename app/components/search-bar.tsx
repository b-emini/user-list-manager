import { useState, useEffect } from 'react';
import { useUserStore } from '../lib/store/useUserStore';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useUserStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localQuery]);

  return (
    <div className="mb-4 text-gray-800">
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Search users by name"
        className="w-full p-2 border rounded-lg"
      />
    </div>
  );
};

export default SearchBar;