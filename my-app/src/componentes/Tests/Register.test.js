import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Registro from '../Registro/Register';

test('Regitro', () => {
  const component = render(<Provider><Registro /></Provider>);
  console.log(component);
});