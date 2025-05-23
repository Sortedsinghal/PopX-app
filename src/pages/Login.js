// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('userDetails'));
    if (
      userData &&
      userData.email.toLowerCase() === form.email.toLowerCase() &&
      userData.password === form.password
    ) {
      navigate('/account');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Signin to your<br />PopX account</h2>

        <label>Email Address</label>
        <input type="email" name="email" placeholder="Enter email address" value={form.email} onChange={handleChange}required />

        <label>Password</label>
        <input type="password" name="password" placeholder="Enter password" typeof='password' value={form.password} onChange={handleChange} required />

        <button type="submit" className="login-btn" disabled={!form.email || !form.password}>Login </button>
      </form>
    </div>
  );
};

export default Login;
