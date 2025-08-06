import React from 'react';

const UserProfile = ({ user }) => (
  <div className="card bg-base-100 shadow p-4">
    <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
    <p>Email: {user.email}</p>
    <p>Role: {user.role}</p>
  </div>
);

export default UserProfile;