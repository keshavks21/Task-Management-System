import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account ✨
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Join us and start your journey
        </p>
        <RegisterForm
          onSubmit={(data) => console.log(data)}
        />
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
