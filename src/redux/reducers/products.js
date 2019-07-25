import { actionConsts } from '../handlers';

const initState = {
  products: [],
  page: 0,
  isFetching: false,
  isError: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionConsts.GET_ITEMS:
      return state;
    case actionConsts.SET_ITEMS:
      return {
        ...state,
        products: action.products
      };
    case actionConsts.FETCH:
      return {
        ...state,
        isFetching: true
      };
    case actionConsts.FETCHED:
      return {
        ...state,
        products: action.products,
        isFetching: false
      };
    case actionConsts.FETCHED_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    case actionConsts.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case actionConsts.PREV_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
};
