import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App>', () => {
  test('renders app', () => {
    render(<App />);
    const linkElement = screen.getByText(/testing/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('shows input and output textboxes', () => {
    render(<App />);

    expect(screen.getByRole('textbox', { name: /in/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /out/i })).toBeInTheDocument();
  });

  test('typing in In textbox will make changes in Out textbox', async () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox', { name: /in/i }), '123');

    expect(await screen.findByRole('textbox', { name: /out/i })).toHaveValue('123');
  });
})
