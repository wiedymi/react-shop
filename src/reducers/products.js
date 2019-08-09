import { actions } from '@/constants'

const { NEXT_PAGE, FETCH, FETCHED, FETCHED_ERROR } = actions

const initState = {
  products: [],
  page: 1,
  isFetching: false,
  isError: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHED:
      return {
        ...state,
        products: action.products,
        isFetching: false,
      }
    case FETCHED_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
      }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    default:
      return state
  }
}
