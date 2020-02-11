import React from 'react'
import Modal from '../../src/components/Analysis/PieChart/Modal'
import rerender from 'react-test-renderer'

jest.mock('react-redux', () => ({
  useDispatch: () => { },
  useSelector: () => ({})
}));

test('Clicked Modal', () => {
  const modal = rerender.create(
    <Modal startDate='' endDate='' />
  )
  let tree = modal.toJSON();
  expect(tree).toMatchSnapshot();
})