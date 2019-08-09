import { actions, filter } from '@/constants'

const {
  SET_FILTER_COLORS,
  SET_FILTER_SEARCH,
  SET_FILTER_SIZE,
  SET_FILTER_SORT_BY,
  SET_FILTER_TAGS,
} = actions

const { COLOR, TAGS, SIZE, SORT_BY } = filter

export const search = searchText => {
  return { type: SET_FILTER_SEARCH, search: searchText }
}

export const setFilterBy = (type, value) => {
  switch (type) {
    case COLOR:
      return { type: SET_FILTER_COLORS, color: value }
    case TAGS:
      return { type: SET_FILTER_TAGS, tags: value }
    case SIZE:
      return { type: SET_FILTER_SIZE, size: value }
    case SORT_BY:
      return { type: SET_FILTER_SORT_BY, sortBy: value }
    default:
      return {}
  }
}
