import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });

describe('App Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('App has a Layout component', () => {
    expect(wrapper.find('layout')).toHaveLength(1);
  });

  test('App has a Header component', () => {
    expect(wrapper.find('header')).toHaveLength(1);
  });
});
