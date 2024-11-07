import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Input from '../Input';

describe('Input Component', () => {
  test('renders input field and displays typed text', () => {
    render(<Input />);
    const inputField = screen.getByRole('textbox'); 

    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: 'Hello, World!' } });
    expect(inputField.value).toBe('Hello, World!');
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});