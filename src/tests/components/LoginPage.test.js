import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startGoogleLogin, startFacebookLogin;

beforeEach(() => {
    startGoogleLogin = jest.fn();
    startFacebookLogin = jest.fn();
    wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} startFacebookLogin={startFacebookLogin} />);
});

test('should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startGoogleLogin on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startGoogleLogin).toHaveBeenCalled();
});

test('should call startFacebookLogin on button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(startFacebookLogin).toHaveBeenCalled();
});