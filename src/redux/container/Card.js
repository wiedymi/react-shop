import { connect } from 'react-redux'
import Card from '../../components/Card/Card'

const filterList = (type, value, name) => {
    if(type === 'rating' || type === 'price' || type === 'priceAsc' || type === 'ratingAsc') {
        value = value.sort((a, b) => {
            let value1 = a[type];
            let value2 = b[type];

            if(value1 < value2) return 1;
            if(value1 > value2) return -1;
            
            return 0
        })

        if(type === 'priceAsc' || type === 'ratingAsc') {
            value = value.reverse();
        }

    } else if(typeof type === 'string' ) {
        value = value.filter((product) => {
            return product.title.includes(type);
        });
    } 

    if(typeof type === 'object' && type !== null) {
        const i = value.filter((item) => {
            const itemVal = item[name];  
            const sizes = type.map((size) => size.value);
            return sizes.every(i => itemVal.includes(i));    
        })
        value = i;  
    }
    return value;
}

const filterItem = (items, filter) => {
    switch (true) {
        case filter.search !== '':
            items = filterList(filter.search, items);
            /* falls through */
        case filter.sortBy !== '':
            items = filterList(filter.sortBy, items)
            /* falls through */
        case filter.tags.length !== 0:
            items = filterList(filter.tags, items, 'tags')
            /* falls through */
        case filter.size !== 0:
            items = filterList(filter.size, items, 'size')
            /* falls through */
        case filter.colors !== 0:
            items = filterList(filter.colors, items, 'color')  
            /* falls through */
        default:
            return items        
    }   
}

const mapStateToProps = state => {
    return {
      items: filterItem(state.items.items, state.filter),
      isLoading: state.items.isFetching,
      isError: state.items.isError
    };
  };
  
  export default connect(mapStateToProps)(Card);