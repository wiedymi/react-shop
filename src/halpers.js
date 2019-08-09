import { filter } from '@/constants'
import countBy from 'lodash.countby'

const { COLOR } = filter

const getDataForFilter = (products, field) => {
  return products
    .reduce((acc, product) => {
      return [...acc, ...product[field]]
    }, [])
    .reduce((acc, value) => {
      return [...acc, value]
    }, [])
    .reduce((acc, value, i, a) => {
      if (field === COLOR) {
        return Object.entries(countBy(a)).map(value => {
          if (field === COLOR) {
            return {
              value: value[0],
              label: value[0],
              count: value[1],
            }
          }
          return {
            value: value[0],
            label: value[0],
          }
        })
      }
    }, [])
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

export { getDataForFilter, LazyLoadInit }
