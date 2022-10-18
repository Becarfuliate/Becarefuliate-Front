import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Tablero from '../Tablero'

test('Tablero', () => {
    
    const piezas = []
    piezas.push({id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png",
    x: 0, y: 0, nombre: 'test-bot', vida: 100, mira: 0, motor: 0});
    
    // Check Tablero Renders
    const componente = render(<Tablero piezas={piezas}/>);
    componente.getByText('test-bot');
    
    // Check Tablero
    /*
    const Tablero = document.getElementById("Tablero");
    const Tablerostyle = getComputedStyle(Tablero);
    console.log(Tablerostyle)
    */
})