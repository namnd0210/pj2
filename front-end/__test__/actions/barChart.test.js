import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions'
import * as types from '../../src/constant/actionTypes'

const mockStore = configureMockStore([thunk])

describe('async action creator', () => {
  it('creates STOP_FETCH_BARCHART_DATA when fetching bar chart data has been done', () => {
    const startDate = ''
    const endDate = ''
    const data = [
      { x: "Day 1", y: expect.any(Number) },
      { x: "Day 2", y: expect.any(Number) },
      { x: "Day 3", y: expect.any(Number) },
      { x: "Day 4", y: expect.any(Number) },
      { x: "Day 5", y: expect.any(Number) },
      { x: "Day 6", y: expect.any(Number) },
      { x: "Day 7", y: expect.any(Number) },
    ]
    const expectedActions = [
      { type: types.START_FETCH_BARCHART_DATA, isLoading: true, data: [] },
      { type: types.STOP_FETCH_BARCHART_DATA, isLoading: false, data }
    ]
    const store = mockStore({})
    return store.dispatch(actions.fetchBarChartData(startDate, endDate)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})