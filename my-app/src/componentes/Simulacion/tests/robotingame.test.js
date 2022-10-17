import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RobotInGame from '../RobotInGame'

test('RobotInGame', () => {
    
    const element = {
        id: 0, image: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png",
            x: 0, y: 0, name: 'test-bot', health: 100, facing: 0, motor: 0, i: 0
    }
    const component = render(<RobotInGame image={element.image} x={element.x} y={element.y} name={element.name}
        num={element.i} health={element.health} motor={element.motor} facing={element.facing}/>);
    component.getByText('test-bot');
})