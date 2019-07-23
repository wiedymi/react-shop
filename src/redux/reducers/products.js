let initState = {
    products: [],
    page: 0,
    isFetching: false,
    isError: false
};

export default (state = initState, action) => {
    const { products } = action;
    switch (action.type){
        case 'GET_ITEMS':
            return state;
        case 'SET_ITEMS':
            return {
                ...state,
                products
            };
        case 'FETCH':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCHED':
            return {
                ...state,
                products,
                isFetching: false
            }
        case 'FETCHED_ERROR':
            return {
                ...state,
                isFetching: false,
                isError: true
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                page: state.page + 1,
            }
        case 'PREV_PAGE':
            return {
                ...state,
                page: state.page - 1,
            }    
        default:
            return state;
    }
}