import React from "react";
import { render, screen } from "@testing-library/react"
import Login from "../index";
import configureStore from 'redux-mock-store';
import { useLoginMutation } from '../../../redux/api/authAPI';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';  // Import userEvent for better user interaction simulation

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../../redux/api/authAPI', () => ({
  useLoginMutation: jest.fn(),
}));



const mockStore = configureStore([]);
const store = mockStore({
  user: { id: 1, name: 'Test User' },
});  // Initialize store with mock state if needed
describe("test Login Components", () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const mockLoginMutation = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
    useNavigate.mockReturnValue(mockNavigate);
    useLoginMutation.mockReturnValue([mockLoginMutation, { isLoading: false }]);
  });

  test("renders login form ", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
  })

  test('should login successfully with valid data', async () => {


    render(
      <Login />
    );
    const usernameInput = screen.getByPlaceholderText('Enter username');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    userEvent.type(usernameInput, 'john.doe');
    userEvent.type(passwordInput, 'password123');
    const button = document.getElementById('SignIn');
    userEvent.click(button);

  })
})