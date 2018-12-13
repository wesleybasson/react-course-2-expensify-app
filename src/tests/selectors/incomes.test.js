import selectIncomes from '../../selectors/incomes';
import moment from 'moment';
import incomes from '../fixtures/incomes';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectIncomes(incomes, filters);
    expect(result).toEqual([incomes[2], incomes[1]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectIncomes(incomes, filters);
    expect(result).toEqual([incomes[2], incomes[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectIncomes(incomes, filters);
    expect(result).toEqual([incomes[0], incomes[1]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectIncomes(incomes, filters);
    expect(result).toEqual([incomes[2], incomes[0], incomes[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectIncomes(incomes, filters);
    expect(result).toEqual([incomes[1], incomes[0], incomes[2]])
});