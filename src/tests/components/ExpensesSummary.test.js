import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

let wrapper;

beforeEach(() => {
    const number = 2;
    const total = 150195;
    wrapper = shallow(<ExpensesSummary number={number} total={total} />);
});

test('should render ExpensesSummary correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should provide correct values for expense count and total', () => {
    expect(wrapper.find('p').html()).toEqual('<p>Viewing 2 expenses totalling $1,501.95</p>');
});