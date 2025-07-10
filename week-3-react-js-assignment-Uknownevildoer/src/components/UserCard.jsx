// src/components/UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => (
  <div className="bg-white dark:bg-gray-800 rounded shadow p-4 hover:shadow-md">
    <h3 className="text-lg font-bold">{user.name}</h3>
    <p>{user.email}</p>
    <p className="text-sm text-gray-500">{user.website}</p>
  </div>
);

export default UserCard;
