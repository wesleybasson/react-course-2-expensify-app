import React from 'react';
import { shallow } from 'enzyme';
import IncomeListItem from '../../components/IncomeListItem';
import incomes from '../fixtures/incomes';

test('should render IncomeListItem with fixture income data', () => {
    const wrapper = shallow(<IncomeListItem key={incomes[1].id} {...incomes[1]} />);
    expect(wrapper).toMatchSnapshot();
});