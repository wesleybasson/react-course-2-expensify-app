import React from 'react';
import { shallow } from 'enzyme';
import { BudgetSummary } from '../../components/BudgetSummary';

test('should correctly render BudgetSummary', () => {
    const wrapper = shallow(<BudgetSummary result={200000} />);
    expect(wrapper).toMatchSnapshot();
});

test('should provide correct values for positive budget result', () => {
    const wrapper = shallow(<BudgetSummary result={160520} />);
    expect(wrapper.find('h1').html()).toEqual('<h1 class=\"page-header__title\">Budget surplus totals <span>$1,605.20</span></h1>');
});

test('should provide correct values for negative budget result', () => {
    const wrapper = shallow(<BudgetSummary result={-33300} />);
    expect(wrapper.find('h1').html()).toEqual('<h1 class=\"page-header__title\">Budget deficit totals <span>-$333.00</span></h1>');
});