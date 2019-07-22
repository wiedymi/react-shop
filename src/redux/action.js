export const getItems = () => {
    return { type: 'GET_ITEMS' }
}

export const search = (search) => {
    return { type: 'SET_FILTER_SEARCH', search }
}

export const fetchItem = () => {
    return { type: 'FETCH' }
}

export const fetchedItem = (products) => {
    return { type: 'FETCHED', products }
}

export const fetchedItemError = () => {
    return { type: 'FETCHED_ERROR' }
}

export const setItems = (products) => {
    return { type: 'SET_ITEMS', products }
}

export const setColors = (colors) => {
    return { type: 'SET_FILTER_COLORS', colors }
}

export const setFilterByColor = (colors) => {
    return { type: 'SET_FILTER_COLORS', colors }
}


export const setFilterBySize = (size) => {
    return { type: 'SET_FILTER_SIZE', size }
}


export const setFilterByTags = (tags) => {
    return { type: 'SET_FILTER_TAGS', tags }
}

export const setFilterBySortBy = (sortBy) => {
    return { type: 'SET_FILTER_SORT_BY', sortBy}
}

export const addToCart = (id, count) => {
    return { type: 'SET_PRODUCT_TO_CART', id, count}
}

export const nextPage = () => {
    return { type: 'NEXT_PAGE' }
}

export const prevPage = () => {
    return { type: 'PREV_PAGE' }
}