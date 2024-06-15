// src/__tests__/Login.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login';

test('renders Login component', () => {
  render(<Login />);
});

test('renders username input field', () => {
  const { getByLabelText } = render(<Login />);
  expect(getByLabelText(/username/i)).toBeInTheDocument();
});

test('renders password input field', () => {
  const { getByLabelText } = render(<Login />);
  expect(getByLabelText(/password/i)).toBeInTheDocument();
});

test('renders login button', () => {
  const { getByRole } = render(<Login />);
  expect(getByRole('button', { name: /login/i })).toBeInTheDocument();
});

test('shows validation message when inputs are empty and login button is clicked', async () => {
  const { getByRole, getByText } = render(<Login />);

  fireEvent.click(getByRole('button', { name: /login/i }));

  expect(getByText(/please fill in all fields/i)).toBeInTheDocument();
});

test('does not show validation message when inputs are filled and login button is clicked', () => {
  const handleLogin = jest.fn();
  const { getByLabelText, getByRole, queryByText }  = render(<Login onLogin={handleLogin} />);


  fireEvent.change(getByLabelText(/username/i), { target: { value: 'user' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'password' } });

  fireEvent.click(getByRole('button', { name: /login/i }));

  expect(queryByText(/welcome john doe/i)).toBeInTheDocument();
});

// stage 2

test('notifies parent component after successful login', () => {

  const handleLogin = jest.fn();
  const { getByLabelText, getByRole, queryByText }  = render(<Login onLogin={handleLogin} />);


  fireEvent.change(getByLabelText(/username/i), { target: { value: 'testuser' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'password' } });

  fireEvent.click(getByRole('button', { name: /login/i }));
  expect(handleLogin).toHaveBeenCalledWith('testuser');
  expect(queryByText(/welcome john doe/i)).toBeInTheDocument();
});