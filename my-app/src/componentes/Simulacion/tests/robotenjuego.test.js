import { render} from '@testing-library/react'
import RobotEnJuego from '../RobotEnJuego'

test('RobotEnJuego', () => {
    
    // Errores en valores: x, y, vida.
    const elem = {
        id: 0, imagen: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png",
            x: -10, y: -10, nombre: 'test-bot', vida: 120, mira: 0, motor: 0, i: 0
    }
    const componente = render(<RobotEnJuego imagen={elem.imagen} x={elem.x} y={elem.y} nombre={elem.nombre}
    num={elem.i} vida={elem.vida} motor={elem.motor} mira={elem.mira}/>);
    
    //Revisar que el robot sea renderizado.
    componente.getByText('test-bot');

    //Revisar correcta posición
    const robot = document.getElementById("RobotEnJuego");
    const robotstyle = getComputedStyle(robot);
    expect(robotstyle.top).toBe('980px');
    expect(robotstyle.left).toBe('0px');

    //Revisar barra de vida
    const robotexto = document.getElementById("RobotStats");
    const vida = robotexto.querySelector('.vida');
    const vidastyle = getComputedStyle(vida);
    expect(vidastyle.width).toBe('350px');
})