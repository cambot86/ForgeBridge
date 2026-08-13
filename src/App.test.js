// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ForgeBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ForgeBridge/i);
    expect(titleElement).toBeInTheDocument();
});
