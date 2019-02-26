import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import InputCell from '../InputCell';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('renders three <InputCell /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(InputCell)).toHaveLength(3);
  });

  it('renders one .cell-total div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.cell.cell-total')).toHaveLength(1);
  });
});