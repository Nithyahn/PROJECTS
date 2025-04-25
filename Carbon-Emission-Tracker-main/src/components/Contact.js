import React, { useState } from 'react';
import './contact.css';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column', // Column layout to place footer at the bottom
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <div style={{
        textAlign: 'left',
        margin: 'auto',
        marginTop: '75px',
        padding: '40px',
        width: '1000px',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}>
        <h2 style={{
          fontSize: '32px',
          marginBottom: '20px',
          textAlign: 'center',
        }}>Contact Us - Admin</h2>

        {submitted ? (
          <div style={{
            textAlign: 'center',
            fontSize: '20px',
            color: '#28a745',
            marginBottom: '20px'
          }}>
            Thank you for your message! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '18px' }}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                style={{
                  width: '500px',
                  padding: '10px',
                  marginTop: '5px',
                  boxSizing: 'border-box',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #ccc'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '18px' }}>Email ID:</label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: '500px',
                  padding: '10px',
                  marginTop: '5px',
                  boxSizing: 'border-box',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #ccc'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="comment" style={{ display: 'block', marginBottom: '5px', fontSize: '18px' }}>Comment:</label>
              <textarea
                id="comment"
                name="comment"
                rows="6"
                style={{
                  width: '500px',
                  padding: '10px',
                  marginTop: '5px',
                  boxSizing: 'border-box',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #ccc'
                }}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#4480d4',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 15px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontSize: '16px',
                marginTop: '20px',
                borderRadius: '8px'
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>

      <footer style={{
        backgroundColor: '#062652',
        color: 'white',
        padding: '1rem',
        width: '98.5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0'
      }}>
        <p>&copy; 2023 Carbon Emission Tracker. All rights reserved.</p>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{ marginLeft: '1rem' }}>
            <a href="#privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
          </li>
          <li style={{ marginLeft: '1rem' }}>
            <a href="#terms" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default ContactUs;
