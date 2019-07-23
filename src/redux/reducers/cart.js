let initState = {
    products: []
};

export default (state = initState, action) => {
    let { products } = state;
    const { id, count } = action;
    
    switch (action.type){
        case 'SET_PRODUCT_TO_CART':
            if(products.length > 0) {
                let cartids = products.map(cart => cart.id);
                cartids = [...new Set(cartids)];
               
                if(cartids.includes(id)) {
                    products = products.map((product) => {
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
           

            return {
                ...state,
                products
            };
        case 'REMOVE_PRODUCT_FROM_CART':
            products = products.filter((product) => {
                return product.id !== id
            })           
            return {
                ...state,
                products
            } 
        case 'CHANGE_CART_PRODUCT_COUNT':
            products = products.map((product) => {
                if(product.id === id) {
                    product = {
                        id: product.id,
                        count
                    }
                } 
                return product;         
            })
            
            return {
                ...state,
                products
            }     
        default:
            return state;
    }
}