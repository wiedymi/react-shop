let initState = {
    count: 0,
    products: []
};

export default (state = initState, action) => {
    switch (action.type){
        case 'SET_PRODUCT_TO_CART':
            const { id, count } = action;
            const product = {
                id, count
            }
            const counts = count + state.count;
            return {
                ...state,
                count: counts,
                products: state.products.concat(product)
            };      
        default:
            return state;
    }
}