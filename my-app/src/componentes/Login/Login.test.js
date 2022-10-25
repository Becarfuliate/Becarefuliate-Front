import {render, screen, fireEvent} from '@testing-library/react';
import axios from 'axios';
import Login from './Login';
//mock de axios, una forma:
jest.mock('axios') // reemplaza el axios real por un objeto fake
// console.log('axios', axios) // Muestra que axios esta mockeado, mock, ...
// si comentas jest.mock('axios') el console log te mostrara request,... no mock

// indica que antes que se ejecute cada test ejecute tal cosa
// en este caso renderiza el componente Login
beforeEach(() => {
    render(<Login />) // Montamos el componente
    axios.get.mockClear() // para que no afecte el comportamiento de una prueba en otra prueba de algun pedido axios => un pedido distinto por prueba
})

test('fdgd', () => {
    // consultamos si existe este elemento en lo que renderiza este componente
    const texto_de_registro = screen.getByText(/Sign Up/i);
    const texto_de_login = screen.getByText(/Sign In/i);
    expect(texto_de_registro).toBeInTheDocument();
    expect(texto_de_login).toBeInTheDocument();
    // screen.debug(); // me retorna lo que hay en el render como un console.log
})

// test('probando si agarra un texto pasado en el campo de formulario', () => {
//     const texto_de_login = screen.getByText('');
//     // fireEvent.change("donde desencadena el input", "que escribo detro de ese input")
//     fireEvent.change(texto_de_login, {target: {value: 'matias'}})
//     fireEvent.click
// })

test('probando mock de axios', () => {
    // es un mock y todos los mock son objetos fake
    // get.mockReturnValueOnce, en el momento que ejecute get como funcion yo
    // puedo indicar que quiero que retorne
    // Ojo: Debo respetar la estructura de la respuesta enviada
    const response = {
        data: [ 
          { token:"iamatoken" },
        ]
    };
    console.log(axios.post.mockReturnValueOnce(response))
    screen.debug();
})