import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginModal from '../components/LoginModal';

configure({ adapter: new Adapter() });

describe('Login Modal Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginModal />);
  });

  test('Login Modal has an email input', () => {
    expect(wrapper.find('input[name="email"]')).toHaveLength(1);
  });

  test('Login Modal has a password input', () => {
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
  });

  test('Login Modal has a submit button', () => {
    expect(wrapper.find('button[name="signin"]')).toHaveLength(1);
  });

});
