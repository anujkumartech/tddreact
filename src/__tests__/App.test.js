// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock the Login component
jest.mock('../components/Login', () => (props) => (
  <div>
    <button onClick={props.onLogin}>Mock Login</button>
  </div>
));

describe('App component', () => {
  test('renders the App component', () => {
    render(<App />);
    expect(screen.getByText('Mock Login')).toBeInTheDocument();
  });

  test('sets isLoggedIn to true when Login button is clicked', () => {
    render(<App />);
    const loginButton = screen.getByText('Mock Login');
    fireEvent.click(loginButton);
    expect(screen.getByText('You are logged in.')).toBeInTheDocument();
  });
});
