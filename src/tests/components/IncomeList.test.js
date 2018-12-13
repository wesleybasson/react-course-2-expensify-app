import React from 'react';
import { shallow } from 'enzyme';
import { IncomeList } from '../../components/IncomeList';
import incomes from '../fixtures/incomes';

test('should render IncomeList with incomes', () => {
    const wrapper = shallow(<IncomeList incomes={incomes} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render IncomeList with empty message', () => {
    const wrapper = shallow(<IncomeList incomes={[]} />)
    expect(wrapper).toMatchSnapshot();
});