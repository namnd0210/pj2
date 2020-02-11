import reducer from '../../src/reducers/barChart'
import * as types from '../../src/constant/actionTypes'


describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: true,
      data: []
    })
  });
  it('should handle START_FETCH_BARCHART_DATA', () => {
    const startAction = {
      type: types.START_FETCH_BARCHART_DATA,
      isLoading: true,
      data: []
    }
    expect(
      reducer(undefined, startAction)
    ).toEqual({
      isLoading: true,
      data: []
    })
  });
  it('should handle STOP_FETCH_BARCHART_DATA', () => {
    const data = [
      { x: "Day 1", y: expect.any(Number) },
      { x: "Day 2", y: expect.any(Number) },
      { x: "Day 3", y: expect.any(Number) },
      { x: "Day 4", y: expect.any(Number) },
      { x: "Day 5", y: expect.any(Number) },
      { x: "Day 6", y: expect.any(Number) },
      { x: "Day 7", y: expect.any(Number) },
    ]
    const successAction = {
      type: types.STOP_FETCH_BARCHART_DATA,
      isLoading: false,
      data
    }
    expect(
      reducer(undefined, successAction)
    ).toEqual({
      isLoading: false,
      data
    })
  });
})