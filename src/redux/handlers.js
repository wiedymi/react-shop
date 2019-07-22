const handleCheckLocalStorage = key => {
    if(typeof localStorage.getItem(key) === 'string'){
      return true
    }
    else{
      return false
    }
  }

const handleGetData = key =>  JSON.parse(localStorage.getItem(key));

const getAllColorsFromItems = (items) => {
    let colors = [];
    colors = items.reduce((colors, item) =>  [...colors, item.color], []);
    colors = new Set([].concat.apply([], colors));
    return colors = Array.from(colors, (color) => {
      return { value: color,  label: color }
    })
}


const getAllTagsFromItems = (items) => {
  let tags = [];
  tags = items.reduce((tags, item) =>  [...tags, item.tags], []);
  tags = new Set([].concat.apply([], tags));
  return tags = Array.from(tags, (tag) => {
      return { value: tag,  label: tag }
  })
}



const getAllSizeFromItems = (items) => {
  let sizes = [];
  sizes = items.reduce((sizes, item) =>  [...sizes, item.size], []);
  sizes = new Set([].concat.apply([], sizes));
  return sizes = Array.from(sizes, (size) => {
    return { value: size,  label: size }
})
}


const filterList = (type, value, name) => {
  if(type === 'rating' || type === 'price' || type === 'priceAsc' || type === 'ratingAsc') {
      let asc = false;
      value = value.sort((a, b) => {
          if(type === 'priceAsc' || type === 'ratingAsc') {
              type = type.slice(0, -3);
              asc = true;
          }
          let value1 = a[type];
          let value2 = b[type];
          
          if(value1 < value2) return 1;
          if(value1 > value2) return -1;
          
          return 0
      })

      if(asc) {
          value = value.reverse();
      }

  } else if(typeof type === 'string' ) {
      value = value.filter((product) => {
          return product.title.includes(type);
      });
  } 

  if(typeof type === 'object' && type !== null) {
      const i = value.filter((product) => {
          const productVal = product[name];  
          const sizes = type.map((size) => size.value);
          return sizes.every(i => productVal.includes(i));    
      })
      value = i;  
  }
  return value;
}

const filterProduct = (products, filter) => {
  switch (true) {
      case filter.search !== '':
          products = filterList(filter.search, products);
          /* falls through */
      case filter.sortBy !== '':
          products = filterList(filter.sortBy, products)
          /* falls through */
      case filter.tags.length !== 0:
          products = filterList(filter.tags, products, 'tags')
          /* falls through */
      case filter.size.length !== 0:
          products = filterList(filter.size, products, 'size')
          /* falls through */
      case filter.colors.length !== 0:
          products = filterList(filter.colors, products, 'color')  
          /* falls through */
      default:
          return products        
  }   
}


export { 
  handleCheckLocalStorage, 
  handleGetData,
  getAllColorsFromItems, 
  getAllSizeFromItems, 
  getAllTagsFromItems, 
  filterProduct
}
