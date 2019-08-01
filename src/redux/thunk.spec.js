import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import getProducts from '@/redux/thunk'
import { fetchItem, fetchedItem, fetchedError } from '@/redux/action'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
describe('Fetch Test', () => {
  it('should execute fetch data', () => {
    const store = mockStore({})

    return store.dispatch(getProducts()).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(fetchItem())
    })
  })

  it('should set fetched data', () => {
    const store = mockStore({})

    return store.dispatch(getProducts()).then(() => {
      const actions = store.getActions()
      expect(actions[1].type).toEqual(fetchedItem().type)
    })
  })

  it('should show fetched data error', () => {
    const store = mockStore({})

    return store
      .dispatch(getProducts())
      .then(() => {})
      .catch(() => {
        const actions = store.getActions()
        expect(actions[1].type).toEqual(fetchedError().type)
      })
  })
})
