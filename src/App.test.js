// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Talisman title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Talisman/i);
    expect(titleElement).toBeInTheDocument();
});
