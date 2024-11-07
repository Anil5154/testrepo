import { render, screen } from '@testing-library/react';
import DemoPrimeTest from '../DemoPrimeTest';
import '@testing-library/jest-dom';

describe('DemoPrimeTest Component', () => {
    test('renders the PrimeReact button using data-testid', () => {
        render(<DemoPrimeTest />);
        
        // Find the button using data-testid
        const button = screen.getByTestId('prime-button');
        
        // Ensure the button is in the document
        expect(button).toBeInTheDocument();
      });

//   test('toggles Avatar visibility on button click', () => {
//     render(<DemoPrimeTest />);
    
//     // Avatar should not be visible initially
//     expect(screen.queryByText('P')).not.toBeInTheDocument();
    
//     // Click the button to toggle the Avatar
//     fireEvent.click(screen.getByRole('button', { name: /button/i }));
    
//     // Avatar should appear after button click
//     expect(screen.getByText('P')).toBeInTheDocument();
    
//     // Click the button again to hide the Avatar
//     fireEvent.click(screen.getByRole('button', { name: /button/i }));
    
//     // Avatar should disappear
//     expect(screen.queryByText('P')).not.toBeInTheDocument();
//   });
});
