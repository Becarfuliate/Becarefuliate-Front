import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Board from '../Board'

test('Board', () => {
    
    const pieces = []
    pieces.push({id: 0, image: "https://opengameart.org/sites/default/files/styles/medium/public/robot-preview.png",
            x: 0, y: 0, name: 'test-bot', health: 100, facing: 0, motor: 0});
    
    const component = render(<Board pieces={pieces}/>);
    const element = component.getByText('test-bot');
    //expect(component.container).toHaveTextContent('test-bot');
})