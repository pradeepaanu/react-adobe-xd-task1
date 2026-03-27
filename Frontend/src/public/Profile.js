import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-image">
            <div className="avatar">
              {user?.fullName?.charAt(0).toUpperCase() || 'U'}
            </div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user?.fullName || 'User'}</h1>
            <p className="profile-email">{user?.email || 'user@example.com'}</p>
          </div>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>

        <div className="profile-bio">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonummy Eirmod Tempor Invidunt Ut 
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua
          </p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <label>Full Name</label>
            <p>{user?.fullName || 'N/A'}</p>
          </div>
          <div className="detail-item">
            <label>Email</label>
            <p>{user?.email || 'N/A'}</p>
          </div>
          <div className="detail-item">
            <label>Phone Number</label>
            <p>{user?.phoneNumber || 'N/A'}</p>
          </div>
          <div className="detail-item">
            <label>Company Name</label>
            <p>{user?.companyName || 'N/A'}</p>
          </div>
          <div className="detail-item">
            <label>Is Agency</label>
            <p>{user?.isAgency ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
