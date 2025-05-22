import React, { useState } from 'react';
import './App.css';

const PopXApp = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phoneNumber: '',
    companyName: '',
    isAgency: 'yes'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  // Welcome Page
  const WelcomePage = () => (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageSection}></div>
        
        <div style={styles.content}>
          <h1 style={styles.title}>Welcome to PopX</h1>
          <p style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
          <div style={styles.buttonContainer}>
            <button 
              onClick={() => setCurrentPage('signup')}
              style={styles.primaryButton}
            >
              Create Account
            </button>
            <button 
              onClick={() => setCurrentPage('login')}
              style={styles.secondaryButton}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Login Page
  const LoginPage = () => (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.content}>
          <div style={styles.header}>
            <h1 style={styles.title}>
              Signin to your PopX account
            </h1>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          
          <div style={styles.formContainer}>
            <div style={styles.inputGroup}>
              <label style={styles.labelPurple}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                style={styles.input}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.labelPurple}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                style={styles.input}
              />
            </div>
          </div>
          
          <button 
            onClick={() => setCurrentPage('settings')}
            style={styles.grayButton}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );

  // Sign Up Page
  const SignUpPage = () => (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.content}>
          <h1 style={styles.title}>
            Create your PopX account
          </h1>
          
          <div style={styles.formContainer}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Full Name*
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                style={styles.input}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.labelPurple}>
                Phone number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                style={styles.input}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.labelPurple}>
                Email address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                style={styles.input}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.labelPurple}>
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                style={styles.input}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.labelPurple}>
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Marry Doe"
                style={styles.input}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Are you an Agency?*
              </label>
              <div style={styles.radioContainer}>
                <label style={styles.radioLabel}>
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === 'yes'}
                    onChange={() => handleRadioChange('yes')}
                    style={styles.radio}
                  />
                  <span>Yes</span>
                </label>
                <label style={styles.radioLabel}>
                  <input
                    type="radio"
                    name="agency"
                    checked={formData.isAgency === 'no'}
                    onChange={() => handleRadioChange('no')}
                    style={styles.radio}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setCurrentPage('settings')}
            style={styles.primaryButton}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );

  // Settings Page
  const SettingsPage = () => (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.content}>
          <h1 style={styles.settingsTitle}>Account Settings</h1>
          
          <div style={styles.profileContainer}>
            <div style={styles.profileImageContainer}>
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b06c?w=60&h=60&fit=crop&crop=face"
                alt="Profile"
                style={styles.profileImage}
              />
              <div style={styles.checkmark}>✓</div>
            </div>
            
            <div style={styles.profileInfo}>
              <h2 style={styles.profileName}>Marry Doe</h2>
              <p style={styles.profileEmail}>Marry@Gmail.Com</p>
            </div>
          </div>
          
          <p style={styles.settingsDescription}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          
          <div style={styles.backButton}>
            <button 
              onClick={() => setCurrentPage('welcome')}
              style={styles.linkButton}
            >
              ← Back to Welcome
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'welcome':
        return <WelcomePage />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignUpPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div style={styles.app}>
      {renderCurrentPage()}
    </div>
  );
};

const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px'
  },
  card: {
    width: '100%',
    maxWidth: '384px',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  imageSection: {
    height: '384px',
    backgroundColor: '#f9fafb',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px'
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  header: {
    marginBottom: '24px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px'
  },
  settingsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '24px'
  },
  description: {
    color: '#6b7280',
    fontSize: '14px',
    lineHeight: '1.5'
  },
  settingsDescription: {
    color: '#6b7280',
    fontSize: '14px',
    lineHeight: '1.6'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#7c3aed',
    color: 'white',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '16px'
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: '#e9d5ff',
    color: '#7c3aed',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '16px'
  },
  grayButton: {
    width: '100%',
    backgroundColor: '#9ca3af',
    color: 'white',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '16px'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    color: '#374151',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px'
  },
  labelPurple: {
    color: '#7c3aed',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  radioContainer: {
    display: 'flex',
    gap: '16px',
    marginTop: '8px'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#374151'
  },
  radio: {
    marginRight: '8px',
    accentColor: '#7c3aed'
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '24px'
  },
  profileImageContainer: {
    position: 'relative'
  },
  profileImage: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  checkmark: {
    position: 'absolute',
    bottom: '-4px',
    right: '-4px',
    width: '24px',
    height: '24px',
    backgroundColor: '#7c3aed',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px'
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  profileName: {
    fontWeight: '600',
    color: '#111827',
    margin: 0,
    marginBottom: '4px'
  },
  profileEmail: {
    color: '#6b7280',
    fontSize: '14px',
    margin: 0
  },
  backButton: {
    paddingTop: '16px'
  },
  linkButton: {
    color: '#7c3aed',
    fontSize: '14px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none'
  }
};

export default PopXApp;