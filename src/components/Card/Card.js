import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import ReadMoreAndLess from 'react-read-more-less';

class Card extends Component {
    state = {
            items: [
            {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac5e" },
                "title": "Polo red",
                "price": 50,
                "size": ["XL", "L", "M", "S", "XS"],
                "images": [
                "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg",
                "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952674675109.jpg",
                "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952389433115.jpg",
                "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952939170654.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Polos"],
                "color": ["red"]
            }
        ]
    }
    
    render() {
        const card = this.state.items.map((item) => (
            <div className='card'>
                <img src={item.images[0]} alt="" />
                <div className='info'>
                    <div className='info__title__rating'>
                        <a href='#fdsf'>
                            <h3>{ item.title }</h3>
                        </a>
                        <StarRatings
                            rating={item.rating}
                            starRatedColor="#00e0c7"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            starDimension="30px"
                            starSpacing="0px"
                            name='rating'
                        />
                    </div>
                    <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={350}
                        readMoreText=" Read more"
                        readLessText=" Read less"
                    >
                        {item.description}
                    </ReadMoreAndLess>
             
                </div>
            </div>
        ))
        return (
           <>{ card }</>
        )
    }
}



export default Card;