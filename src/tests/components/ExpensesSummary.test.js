import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary number={1} total={1095} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary number={2} total={150195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should provide correct values for expense count and total', () => {
    const wrapper = shallow(<ExpensesSummary number={2} total={150195} />);
    expect(wrapper.find('h1').html()).toEqual('<h1>Viewing 2 expenses totalling $1,501.95</h1>');
});