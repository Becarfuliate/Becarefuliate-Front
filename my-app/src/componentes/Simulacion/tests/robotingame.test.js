import { render, within } from '@testing-library/react'
import RobotInGame from '../RobotInGame'

test('RobotInGame', () => {
    
    // Error numbers in: x, y, health.
    const element = {
        id: 0, image: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png",
            x: -10, y: -10, name: 'test-bot', health: 120, facing: 0, motor: 0, i: 0
    }
    const component = render(<RobotInGame image={element.image} x={element.x} y={element.y} name={element.name}
    num={element.i} health={element.health} motor={element.motor} facing={element.facing}/>);
    
    //Check Robot's name renders
    component.getByText('test-bot');

    //Check Correct Position
    const robot = document.getElementById("RobotInGame");
    const robotstyle = getComputedStyle(robot);
    expect(robotstyle.top).toBe('980px');
    expect(robotstyle.left).toBe('0px');

    //Check HealthBar
    const robotext = document.getElementById("RobotStats");
    const health = robotext.querySelector('.health');
    const healthstyle = getComputedStyle(health);
    expect(healthstyle.width).toBe('350px');
})