import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="navbar bg-base-100 shadow">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-xl">Task Manager</Link>
    </div>
    <div className="flex-none">
      <Link to="/login" className="btn btn-sm btn-outline mx-1">Login</Link>
      <Link to="/register" className="btn btn-sm btn-outline mx-1">Register</Link>
    </div>
  </div>
);

export default Header;