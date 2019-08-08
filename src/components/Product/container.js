import Product from '@/components/Product/component'
import { connect } from 'react-redux'
import { addToCart } from '@/redux/action'

const mapStateToProps = (state, { match }) => {
  const getRandom = (arr, n) => {
    var result = new Array(n)
    var len = arr.length
    var taken = new Array(len)
    if (n > len) return
    while (n--) {
      var x = Math.floor(Math.random() * len)
      result[n] = arr[x in taken ? taken[x] : x]
      taken[x] = --len in taken ? taken[len] : len
    }
    return result
  }

  return {
    product: [...state.products.products].filter(product => {
      return product._id.$oid === match.params.id
    })[0],
    recommendation: getRandom([...state.products.products], 5),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: () => dispatch(addToCart()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product)
