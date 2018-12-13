export default (incomes = []) => {
    return incomes
        .map((income) => income.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};