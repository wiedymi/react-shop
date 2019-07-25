import { actionConsts } from '../handlers';

const initState = {
  search: '',
  sortBy: '',
  colors: [],
  size: [],
  tags: []
};

export default (state = initState, action) => {
  const { search, sortBy, tags, size, colors } = action;
  switch (action.type) {
    case actionConsts.SET_FILTER_SEARCH:
      return {
        ...state,
        search
      };
    case actionConsts.SET_FILTER_SORT_BY:
      return {
        ...state,
        sortBy
      };
    case actionConsts.SET_FILTER_COLORS:
      return {
        ...state,
        colors
      };
    case actionConsts.SET_FILTER_TAGS:
      return {
        ...state,
        tags
      };
    case actionConsts.SET_FILTER_SIZE:
      return {
        ...state,
        size
      };
    default:
      return state;
  }
};
