import React, { Component } from 'react'

class ProductSizeList extends Component {
  state = {
    selected: undefined,
  }

  handleSize = ({ target }) => {
    const selected = target.value
    this.setState(state => {
      return {
        ...state,
        selected,
      }
    })
  }

  render () {
    const { size } = this.props
    const { selected } = this.state
    return (
      <div className="size desktop">
        <p>Avalible size</p>
        <div className="grid-12 no-padding">
          {size.map(sizeProduct => (
            <button
              className={selected === sizeProduct ? 'button selected' : 'button'}
              onClick={this.handleSize}
              key={sizeProduct}
              value={sizeProduct}
              type="button"
            >
              {sizeProduct}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default ProductSizeList
