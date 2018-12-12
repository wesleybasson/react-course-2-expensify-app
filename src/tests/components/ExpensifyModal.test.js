import React from 'react';
import { shallow } from 'enzyme';
import ExpensifyModal from '../../components/ExpensifyModal';

let wrapper, handleClose, handleAction;

beforeEach(() => {
    handleClose = jest.fn();
    handleAction = jest.fn();
    wrapper = shallow(<ExpensifyModal handleClose={handleClose} handleAction={handleAction} />)
});

test('should render ExpensifyModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle modal action', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(handleAction).toHaveBeenCalled();
});

test('should handle closing of modal', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(handleClose).toHaveBeenCalled();
});