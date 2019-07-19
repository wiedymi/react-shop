let initState = {
    items: [],
    isFetching: false,
    isError: false
};

export default (state = initState, action) => {
    const { items } = action;
    switch (action.type){
        case 'GET_ITEMS':
            return state;
        case 'SET_ITEMS':
            return {
                ...state,
                items
            };
        case 'FETCH':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCHED':
            return {
                ...state,
                items,
                isFetching: false
            }
        case 'FETCHED_ERROR':
            return {
                ...state,
                isFetching: false,
                isError: true
            } 
        default:
            return state;
    }
}