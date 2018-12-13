import React from 'react';
import { shallow } from 'enzyme';
import { IncomesSummary } from '../../components/IncomesSummary';

test('should correctly render IncomesSummary with 1 income', () => {
    const wrapper = shallow(<IncomesSummary number={1} total={1095} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render IncomesSummary with multiple incomes', () => {
    const wrapper = shallow(<IncomesSummary number={2} total={150195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should provide correct values for income count and total', () => {
    const wrapper = shallow(<IncomesSummary number={2} total={150195} />);
    expect(wrapper.find('h1').html()).toEqual('<h1 class=\"page-header__title\">Viewing <span>2</span> incomes totalling <span>$1,501.95</span></h1>');
});