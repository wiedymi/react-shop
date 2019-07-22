let initState = {
    count: 0,
    products: []
};

export default (state = initState, action) => {
    switch (action.type){
        case 'SET_PRODUCT_TO_CART':
            let { products } = state;
            const { id, count } = action;
                       
            if(state.products.length > 0) {
                let cartids = state.products.map(cart => cart.id);
                cartids = [...new Set(cartids)];
               
                if(cartids.includes(id)) {
                    products = state.products.map((product) => {
                        let output = {
                            id: product.id,
                            count: product.count
                        };              
                        if(product.id === id){
                             output = {
                                id,
                                count: product.count + count
                            }
                        }
                        return output;
                    })
                    
                } else {
                    products.push({
                        id,
                        count
                    })
                }
            } else {
                products.push({
                    id,
                    count
                })
            }
           
            const counts = count + state.count;

            return {
                ...state,
                count: counts,
                products
            };      
        default:
            return state;
    }
}