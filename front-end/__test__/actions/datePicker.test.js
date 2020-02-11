import * as actions from '../../src/actions'
import * as types from '../../src/constant/actionTypes'


describe('./datePicker', () => {
  it('setDate', () => {
    const startDate = ''
    const endDate = ''

    const expected = {
      type: types.SET_DATE,
      startDate,
      endDate
    };
    const actual = actions.setDate(startDate, endDate);

    expect(actual).toEqual(expected)
  })
})