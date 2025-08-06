import React from 'react';
import UserProfile from '../components/UserProfile';

const Profile = () => {
  const user = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', role: 'user' };
  return (
    <div className="p-4">
      <UserProfile user={user} />
    </div>
  );
};

export default Profile;