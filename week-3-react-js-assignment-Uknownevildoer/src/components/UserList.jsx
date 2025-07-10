// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Button from './Button';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="my-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">User Directory</h2>
        <Button variant="primary" size="sm" onClick={fetchUsers}>
          Refresh
        </Button>
      </div>

      {loading && <p className="text-blue-500">Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
