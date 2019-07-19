import React, { PureComponent } from 'react'
import Info from './Info'
import Img from './Img'
import { connect } from 'react-redux'
import getItems from '../../redux/thunk'

class Card extends PureComponent {
    state = {
      items: [],
      search: '',
      isLoading: true,
      isError: false
    }
    componentDidMount(){
      if(this.state.isLoading){
        try {
          this.props.dispatch(getItems());
        } catch (error) {
          return new Error(error)
        }
        
      }
    }
    componentDidUpdate(){
      let { items, search = '', isLoading, isError } = this.props;
      if(this.state.isLoading !== isLoading){
        this.setState({ items, search, isLoading, isError })
      }
    }
    render() {
      const card = 
      this.state.items
        .splice(0,10)
        .map((item) => (
            <div className='card' key={item["_id"]["$oid"]}>
                <Img image={item.images[0]} />
                <Info
                    title={item.title}
                    rating={item.rating}
                    description={item.description} 
                    tags={item.tags}
                    color={item.color}
                    size={item.size}
                    price={item.price}                     
                />        
            </div>
        ))
          return (
            <>
            { !this.state.isLoading ? card : (
              <div>Loading</div>
            )}
            </>
          )
    }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    isLoading: state.items.isFetching,
    isError: state.items.isError
  };
};

export default connect(mapStateToProps)(Card);