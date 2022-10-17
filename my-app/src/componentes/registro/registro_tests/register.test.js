const { render } = require('@testing-library/react');

import Registro from '../Register';

test('Regitro', () => {
  const component = render(<Registro />);
  console.log(component);
});


/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/