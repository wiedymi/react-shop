import CardSelector from '@/selectors/card'
import FilterSelector from '@/selectors/filter'
import CartSelector from '@/selectors/cart'
import ProductsReducer from '@/redux/reducers/products'
import CartReducer from '@/redux/reducers/cart'
import FilterReducer from '@/redux/reducers/filter'
import { fetchedItem } from '@/redux/action'

describe('Selectors', () => {
  const product = [
    {
      _id: { $oid: '5bb6b6936cfa75c4e50bac5e' },
      title: 'Polo red',
      price: 50,
      size: ['XL', 'L', 'M', 'S', 'XS'],
      images: [
        'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg',
        'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952674675109.jpg',
        'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952389433115.jpg',
        'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952939170654.jpg',
      ],
      rating: 4,
      description:
        'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
      tags: ['Polos'],
      color: ['red'],
    },
  ]

  const state = {
    products: ProductsReducer(undefined, fetchedItem(product)),
    filter: FilterReducer(undefined, { type: '' }),
    cart: CartReducer(undefined, { type: '' }),
  }

  it('Card', () => {
    expect(CardSelector({ state, hasMoreProducts: false })).toEqual(product)
  })

  it('Filter', () => {
    expect(FilterSelector({ filter: state.filter, products: state.products.products })).toEqual(
      product,
    )

    expect(
      FilterSelector({
        filter: {
          ...state.filter,
          search: 'Something that is not contained in products',
        },
        products: state.products.products,
      }),
    ).toEqual([])
  })
  it('Cart', () => {
    expect(CartSelector(state)).toEqual({ price: 0, products: [] })
  })
})
