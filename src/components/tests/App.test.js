import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Board from '../Board';
import setupTest from './setupTest';


describe('Rendering of App component test', () => {
  test('app should render correctly', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
  test('should render Board', () => {
    const wrapper = shallow(<App />);
    const board = wrapper.find(Board);
    expect(board.exists()).toBe(true);
  })
});

