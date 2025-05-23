// src/pages/Account.js
import React, { useEffect, useState } from 'react';
import './Account.css';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('userDetails');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <div className="account-wrapper">
      <div className="account-card">
        <div className="account-topbar">
          <h1>Account Settings</h1>
        </div>

        {user && (
          <div className="account-content">
            <div className="account-header">
              <div className="profile-img-wrapper">
                <img
                  src="https://i.pravatar.cc/100?img=13"
                  alt="Profile"
                  className="profile-img"
                />
                <div className="camera-icon">📷</div>
              </div>
              <div className="profile-details">
                <h2>{user.fullName}</h2>
                <p className="email">{user.email}</p>
              </div>
            </div>

            <p className="bio-text">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
              Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>

            <hr className="dashed-divider" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
