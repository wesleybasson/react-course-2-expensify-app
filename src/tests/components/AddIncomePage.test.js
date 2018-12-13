import React from 'react';
import { shallow } from 'enzyme';
import { AddIncomePage } from '../../components/AddIncomePage';
import incomes from '../fixtures/incomes';

let startAddIncome, history, wrapper;

beforeEach(() => {
    startAddIncome = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddIncomePage startAddIncome={startAddIncome} history={history} />);
});

test('should render AddIncomePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('IncomeForm').prop('onSubmit')(incomes[1]);
    expect(history.push).toHaveBeenLastCalledWith('/incomes');
    expect(startAddIncome).toHaveBeenLastCalledWith(incomes[1]);
});