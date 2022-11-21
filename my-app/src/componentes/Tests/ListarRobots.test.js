import ListarRobots from '../ListarRobots/ListarRobots';
import {render, screen} from '@testing-library/react';

const fakeListRobots = [
    {
        "id": 5,
        "name": "Krlos",
        "avatar": "asdf",
        "matchs_pleyed": 2,
        "matchs_won": 2,
        "avg_life_time": 80
    },
    {
        "id": 54,
        "name": "Krlos2",
        "avatar": "asdfgfg",
        "matchs_pleyed": 23,
        "matchs_won": 2,
        "avg_life_time": 10
    },
    {
        "id": 5,
        "name": "Krlos3",
        "avatar": "sisi",
        "matchs_pleyed": 9,
        "matchs_won": 0,
        "avg_life_time": 30
    }
  ]

beforeEach(() => {
    render(<ListarRobots.Listing robots={fakeListRobots}/>)
})

test('test name in list correct to list take', () => {
    expect(screen.getByText(`Krlos`)).toBeInTheDocument()
    expect(screen.getByText(`Krlos2`)).toBeInTheDocument()
    expect(screen.getByText(`Krlos3`)).toBeInTheDocument()
})

test('lenght list correct', () => {
    const robotsNames = screen.getAllByTestId('robot-name')
    expect(robotsNames).toHaveLength(3);
})
