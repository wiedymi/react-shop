export const getItems = () => {
    return { type: 'GET_ITEMS' }
}

export const search = (search) => {
    return { type: 'SET_FILTER_SEARCH', search }
}

export const fetchItem = () => {
    return { type: 'FETCH' }
}

export const fetchedItem = (items) => {
    return { type: 'FETCHED', items }
}
export const fetchedItemError = () => {
    return { type: 'FETCHED_ERROR' }
}

export const setItems = (items) => {
    return { type: 'SET_ITEMS', items }
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