import React, { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="firstName" type="text" className="input input-bordered w-full" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" type="text" className="input input-bordered w-full" placeholder="Last Name" onChange={handleChange} />
      <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" onChange={handleChange} />
      <button type="submit" className="btn btn-primary w-full">Register</button>
    </form>
  );
};

export default RegisterForm;
