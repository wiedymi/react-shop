export const getItems = () => {
    return { type: 'GET_ITEMS' }
}

export const search = (text) => {
    return { type: 'GET_ITEMS_SEARCH', text }
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
