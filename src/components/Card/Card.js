import React, { Component } from 'react'
import Info from './Info'


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
                  },
                  {
                    "_id": { "$oid": "5bb6b6936cfa75c4e50bac5f" },
                    "title": "Yellow pant",
                    "price": 6,
                    "size": ["XS", "L"],
                    "images": [
                      "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_27922.jpg",
                      "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_35871.jpg",
                      "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_67554.jpg",
                      "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_52289.jpg"
                    ],
                    "rating": 3,
                    "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                    "tags": ["Pants"],
                    "color": ["yellow"]
                  },
                  {
                    "_id": { "$oid": "5bb6b6936cfa75c4e50bac60" },
                    "title": "Blue \u0026 yellow pant",
                    "price": 66,
                    "size": ["XS", "M", "L"],
                    "images": [
                      "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/25/source-img/20180725172558_32423.jpg",
                      "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/25/source-img/20180725172558_38854.jpg",
                      "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/25/source-img/20180725172558_59140.jpg"
                    ],
                    "rating": 3.5,
                    "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                    "tags": ["Pants"],
                    "color": ["yellow", "blue"]
                  },
        ]
    }

    render() {
        const card = this.state.items.map((item, index) => (
            <div className='card' key={item["_id"]["$oid"]}>
                <img src={item.images[0]} alt="" />
                <Info
                    title={item.title}
                    rating={item.rating}
                    description={item.description} 
                    tags={item.tags}
                    color={item.color}
                    size={item.size}                 
                />
              
            </div>
        ))
        return (
           <>{ card }</>
        )
    }
}



export default Card;