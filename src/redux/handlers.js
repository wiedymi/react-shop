const getDataForFilter = (products, field) => {
  let output = []
  output = products.reduce((result, product) => [...result, product[field]], [])
  output = new Set([].concat(...output))
  output = Array.from(output, value => {
    return { value, label: value }
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
