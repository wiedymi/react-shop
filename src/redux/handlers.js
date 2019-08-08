const getDataForFilter = (products, field) => {
  let output = []
  const colorsCount = []
  output = products.reduce((result, product) => [...result, product[field]], [])
  if (field === 'color') {
    output.map(product => {
      return product.map(color => {
        if (!colorsCount[color]) {
          return (colorsCount[color] = 1)
        } else {
          return (colorsCount[color] += 1)
        }
      })
    })
  }
  output = new Set([].concat(...output))
  output = Array.from(output, value => {
    return { value, label: value, count: colorsCount[value] }
  }).sort((a, b) => {
    const value1 = a.value
    const value2 = b.value

    if (value1 < value2) return 1
    if (value1 > value2) return -1

    return 0
  })
  return output
}

const LazyLoadInit = () => {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
  if ('IntersectionObserver' in window) {
    // eslint-disable-next-line no-undef
    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.classList.remove('lazy')
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage)
    })
  }
}

const isEquil = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export { getDataForFilter, isEquil, LazyLoadInit }
