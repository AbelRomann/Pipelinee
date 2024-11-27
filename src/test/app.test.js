import { render, screen } from '@testing-library/react';
import App from '../App';

test('Muestra el mensaje inicial', () => {
  render(<App />);
  const textElement = screen.getByText(/¡Hola, mundo!/i);
  expect(textElement).toBeInTheDocument();
});
