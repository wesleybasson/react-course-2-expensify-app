import React from 'react';
import { shallow } from 'enzyme';
import IncomeDashboardPage from '../../components/IncomeDashboardPage';

test('should render IncomeDashboardPage correctly', () => {
    const wrapper = shallow(<IncomeDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});