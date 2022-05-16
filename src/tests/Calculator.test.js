import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should be able to add 2 numbers', () => {
    const number4 = container.getByTestId('number4');
    const number1 = container.getByTestId('number1');
    const buttonPlus = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number1);
    fireEvent.click(buttonPlus);
    fireEvent.click(number4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5')
  })

  it('Should be able to subtract 2 numbers', () => {
    const number7 = container.getByTestId('number7');
    const number4 = container.getByTestId('number4');
    const buttonMinus = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number7);
    fireEvent.click(buttonMinus);
    fireEvent.click(number4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('Should be able to multiply 2 numbers', () => {
    const number3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const number5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(number5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15')
  })

  it('Should be able to divide 2 numbers', () => {
    const number2 = container.getByTestId('number2');
    const number1 = container.getByTestId('number1')
    const buttonDivide = container.getByTestId('operator-divide');
    const number7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2);
    fireEvent.click(number1);
    fireEvent.click(buttonDivide);
    fireEvent.click(number7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('Should be able to concatenate multiple numbers', () => {
    const number2 = container.getByTestId('number2');
    const number1 = container.getByTestId('number1')
    const number7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2);
    fireEvent.click(number1);
    fireEvent.click(number7);
    expect(runningTotal.textContent).toEqual('217')
  })

  it('Should be able chain operations together', () => {
    const number2 = container.getByTestId('number2');
    const buttonAdd = container.getByTestId('operator-add')
    const number1 = container.getByTestId('number1')
    const buttonMultiply= container.getByTestId('operator-multiply');
    const number7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2);
    fireEvent.click(buttonAdd)
    fireEvent.click(number1);
    fireEvent.click(buttonMultiply);
    fireEvent.click(number7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('21')
  })

  it('Should be able to clear the data', () => {
    const number4 = container.getByTestId('number4');
    const number1 = container.getByTestId('number1');
    const buttonPlus = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear')
    fireEvent.click(number1);
    fireEvent.click(buttonPlus);
    fireEvent.click(number4);
    fireEvent.click(buttonPlus);
    fireEvent.click(number4);
    fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual('0')
    fireEvent.click(buttonPlus);
    fireEvent.click(number4);
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('9')
  })

})



