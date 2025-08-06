import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => <div className="p-4 max-w-md mx-auto"><LoginForm onSubmit={(data) => console.log(data)} /></div>;

export default Login;