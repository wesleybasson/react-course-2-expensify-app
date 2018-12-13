import React from 'react';
import { shallow } from 'enzyme';
import { EditIncomePage } from '../../components/EditIncomePage';
import incomes from '../fixtures/incomes';

let startEditIncome, startRemoveIncome, handleOpen, history, wrapper;

beforeEach(() => {
    startEditIncome = jest.fn();
    startRemoveIncome = jest.fn();
    handleOpen = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditIncomePage 
            startEditIncome={startEditIncome}
            handleOpen={handleOpen}
            history={history}
            startRemoveIncome={startRemoveIncome}
            income={incomes[2]}
        />
    );
});

test('should render EditIncomePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditIncome', () => {
    wrapper.find('IncomeForm').prop('onSubmit')(incomes[2]);
    expect(history.push).toHaveBeenLastCalledWith('/incomes');
    expect(startEditIncome).toHaveBeenLastCalledWith(incomes[2].id, incomes[2]);
});

// test('should handle startRemoveIncome', () => {
//     wrapper.find('button').simulate('click');
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(startRemoveIncome).toHaveBeenLastCalledWith({ id: expenses[2].id });
// });