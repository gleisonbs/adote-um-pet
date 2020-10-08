import React from 'react';
import App from '../components/App'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('App has a Layout component', () => {
    expect(wrapper.find('layout').length).toBe(1);
  });

  test('App has a Header component', () => {
    expect(wrapper.find('header').length).toBe(1);
  });
});
