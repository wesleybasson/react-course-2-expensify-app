import selectIncomesTotal from '../../selectors/incomes-total';
import incomes from '../fixtures/incomes';

test('should return 0 if no incomes', () => {
    const total = selectIncomesTotal();
    expect(total).toBe(0);
});

test('should correctly add up a single income', () => {
    const total = selectIncomesTotal([incomes[0]]);
    expect(total).toBe(200000);
});

test('should correctly add up multiple incomes', () => {
    const total = selectIncomesTotal(incomes);
    expect(total).toBe(445499);
});