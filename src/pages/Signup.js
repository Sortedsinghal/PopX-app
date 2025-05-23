
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(form));
    navigate('/account');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create your PopX account</h2>

        <label>Full Name*</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required />

        <label>Phone number*</label>
        <input name="phone" type="tel" pattern="[0-9]{10}" maxLength="10" placeholder="Enter 10-digit mobile number" value={form.phone} onChange={handleChange} required />


        <label>Email address*</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />

        <label>Password*</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} required />

        <label>Company name</label>
        <input name="company" value={form.company} onChange={handleChange} />

        <label>Are you an Agency?*</label>
        <div className="radio-modern">
        <label className="radio-option">
            <input type="radio" name="isAgency" value="yes" checked={form.isAgency === 'yes'} onChange={handleChange}/>
            <span className="radio-label">Yes</span>
        </label>
        <label className="radio-option">
            <input type="radio" name="isAgency" value="no" checked={form.isAgency === 'no'} onChange={handleChange}/>
            <span className="radio-label">No</span>
        </label>
        </div>


        <button type="submit" className="signup-btn">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
