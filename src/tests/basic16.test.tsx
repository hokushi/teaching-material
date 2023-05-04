import React from 'react';
import { sum, minus } from '../pages/react-basic/basic16';
import { Greeting,HibaraAge } from '../components/component_for_test';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus two numbers', () => {
    expect(minus(2, 1)).toBe(1);
    expect(minus(1, 2)).toBe("aはbより大きい値を入れてください");
    }
)

test('renders greeting with name', () => {
    render(<Greeting name="Hibara"/>);
    const greetingElement = screen.getByText(/Hello, Hibara!/i);
    expect(greetingElement).toBeInTheDocument();
});

test('renders HibaraAge with name and age', () => {
    render(<HibaraAge name="Hibara" age={20}/>);
    const HibaraAgeElement = screen.getByText(/Hibaraは20歳です/i);
    expect(HibaraAgeElement).toBeInTheDocument();
}
)
