const { render } = require('@testing-library/react');

import Registro from '../Register';

test('Regitro', () => {
  const component = render(<Registro />);
  console.log(component);
});