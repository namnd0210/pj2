import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DatePicker from '../../src/components/Analysis/DatePicker/DatePicker'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
  useDispatch: () => { },
  useSelector: () => ({})
}));

describe('<DatePicker />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const wrapper = shallow(
      <DatePicker />,
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  })
  it('Should render and match the snapshot', () => {
    const wrapper = shallow(
      <DatePicker />,
    );
    expect(wrapper).toMatchSnapshot();
  })
})