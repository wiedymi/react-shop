import { actions } from '@/constants'

const { NEXT_PAGE, FETCH, FETCHED, FETCHED_ERROR } = actions

export const fetchProducts = () => {
  return { type: FETCH }
}

export const fetchedProducts = products => {
  return { type: FETCHED, products }
}

export const fetchedError = () => {
  return { type: FETCHED_ERROR }
}

export const nextPage = () => {
  return { type: NEXT_PAGE }
}
