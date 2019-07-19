import React, { PureComponent } from 'react'
import Info from './Info'
import Img from './Img'
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
    componentWillReceiveProps(nextProps) {
      let { items, search = '', isLoading, isError } = nextProps;
      if(items){
        this.setState({ items, search, isLoading, isError })
      }
    }
    render() {
      const card = 
      this.state.items
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


export default Card;