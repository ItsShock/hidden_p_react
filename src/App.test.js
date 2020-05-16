import React from 'react';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  })

  it('Poprawnie wyświetla button', () => {
    expect(!!wrapper.find('button')).toBe(true)
  });

  it('Domyślnie nie wyświetla paragrafu', () => {
    expect(wrapper.contains('p')).toBe(false)
  });

  it('Po kliknięciu w button wyświetla paragraf z odpowienim hasłem', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toBe('A kuku!')
  });

  it('Po ponownym kliknięciu w button ukrywa paragraf', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.contains('p')).toBe(false)
  });
});