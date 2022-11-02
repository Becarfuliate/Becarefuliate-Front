import {render, screen, fireEvent} from '@testing-library/react';
import axios from 'axios';
import AgregarRobot from '../AgregarRobot/AgregarRobot';

beforeEach(() => {
    render(<AgregarRobot />) // Montamos el componente
})

test('existen elementos en el componente renderizado de agregar robots', () => {
    const textNameRobot = screen.getByText(/Nombre del Robot/i);
    const textAvatarRobot = screen.getByText(/Subir AvatarRobot/i);
    const textFileRObot = screen.getByText(/Subir codigo python del Robot/i);
    expect(textNameRobot).toBeInTheDocument();
    expect(textAvatarRobot).toBeInTheDocument();
    expect(textFileRObot).toBeInTheDocument();
    // screen.debug(); // me retorna lo que hay en el render como un console.log
})
