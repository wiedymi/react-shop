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

export { handleCheckLocalStorage, handleGetData, getAllColorsFromItems, getAllSizeFromItems, getAllTagsFromItems }
