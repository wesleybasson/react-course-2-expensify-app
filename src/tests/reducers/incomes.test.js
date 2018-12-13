import incomesReducer from '../../reducers/incomes';
import incomes from '../fixtures/incomes';
import moment from 'moment';

test('should set default state', () => {
    const state = incomesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove income by id', () => {
    const action = {
        type: 'REMOVE_INCOME',
        id: incomes[1].id
    };
    const state = incomesReducer(incomes, action);
    expect(state).toEqual([incomes[0], incomes[2]]);
});

test('should not remove incomes if id not found', () => {
    const action = {
        type: 'REMOVE_INCOME',
        id: '-1'
    };
    const state = incomesReducer(incomes, action);
    expect(state).toEqual(incomes);
});

test('should add an income', () => {
    const income = {
        id: '4',
        description: 'Added income',
        amount: 1000000,
        createdAt: moment().valueOf()
    };
    const action = {
        type: 'ADD_INCOME',
        income
    };
    const state = incomesReducer(incomes, action);
    expect(state).toEqual([...incomes, income]);
});

test('should edit an income', () => {
    const amount = 179900;
    const action = {
        type: 'EDIT_INCOME',
        id: incomes[1].id,
        updates: {
            amount
        }
    };
    const state = incomesReducer(incomes, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an income if the income is not found', () => {
    const amount = 99000;
    const action = {
        type: 'EDIT_INCOME',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = incomesReducer(incomes, action);
    expect(state).toEqual(incomes);
});

test('should set incomes', () => {
    const action = {
        type: 'SET_INCOMES',
        incomes: [incomes[1]]
    };
    const state = incomesReducer(incomes, action);
    expect(state).toEqual([incomes[1]]);
});