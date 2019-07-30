import actionConsts from '@/redux/actionConsts'

const {
  SET_FILTER_COLORS,
  SET_FILTER_SEARCH,
  SET_FILTER_SIZE,
  SET_FILTER_SORT_BY,
  SET_FILTER_TAGS,
} = actionConsts

const initState = {
  search: '',
  sortBy: '',
  colors: [],
  size: [],
  tags: [],
}

export default (state = initState, action) => {
  const { search, sortBy, tags, size, colors } = action
  switch (action.type) {
    case SET_FILTER_SEARCH:
      return {
        ...state,
        search,
      }
    case SET_FILTER_SORT_BY:
      return {
        ...state,
        sortBy,
      }
    case SET_FILTER_COLORS:
      return {
        ...state,
        colors,
      }
    case SET_FILTER_TAGS:
      return {
        ...state,
        tags,
      }
    case SET_FILTER_SIZE:
      return {
        ...state,
        size,
      }
    default:
      return state
  }
}
