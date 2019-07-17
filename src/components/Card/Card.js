import React, { Component } from 'react'
import Info from './Info'
import Img from './Img'

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
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac61" },
                "title": "Dark blue jean",
                "price": 20,
                "size": ["XS", "L"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720161510_63076.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720161510_46741.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720161510_77977.jpg"
                ],
                "rating": 0.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Pants"],
                "color": ["blue"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac62" },
                "title": "Blue cotton jacket",
                "price": 110,
                "size": ["XL", "XS", "M", "L"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/30/source-img/20171030165524_57809.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/30/source-img/20171030165524_96044.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/30/source-img/20171030165524_11220.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Jackets"],
                "color": ["blue", "white"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac63" },
                "title": "Modern art shirt",
                "price": 10,
                "size": ["XL", "L", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155617_93798.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155617_76669.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155617_41853.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155616_96061.jpg"
                ],
                "rating": 5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Shirts"],
                "color": ["yellow", "blue", "purple", "green"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac64" },
                "title": "Black cotton jacket",
                "price": 110,
                "size": ["XL", "XS", "M", "L"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_91772.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_14734.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_85675.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Jackets"],
                "color": ["black", "grey"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac65" },
                "title": "Blazer black",
                "price": 65,
                "size": ["XL", "XS", "L"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/25/source-img/20160725122041_81042.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_14734.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_85675.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Jackets"],
                "color": ["black", "grey"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac66" },
                "title": "Blazer christmas",
                "price": 65,
                "size": ["XL", "L", "M"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/26/source-img/20171026104800_75333.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/26/source-img/20171026104801_37889.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/26/source-img/20171026104801_46431.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/26/source-img/20171026104802_95255.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Jackets"],
                "color": ["red", "grey"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac67" },
                "title": "Blazer grey",
                "price": 65,
                "size": ["XL", "L", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/11/01/source-img/20161101165944_84994.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/11/01/source-img/20161101165944_46584.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Jackets"],
                "color": ["black", "grey"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac68" },
                "title": "Blazer party grey",
                "price": 65,
                "size": ["XL", "L", "M"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_23902.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_46494.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_83861.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/13/source-img/20161013153000_27628.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Jackets"],
                "color": ["red", "grey"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac69" },
                "title": "Blue dress",
                "price": 65,
                "size": ["XL", "L", "M"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/07/source-img/20180907195249_56912.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/07/source-img/20180907195249_48060.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/07/source-img/20180907195249_65515.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Dresses"],
                "color": ["blue"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac6a" },
                "title": "White dress",
                "price": 65,
                "size": ["L", "M", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/06/22/source-img/20180622095930_34558.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/06/22/source-img/20180622095929_68228.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/06/22/source-img/20180622095928_90026.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Dresses"],
                "color": ["white"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac6b" },
                "title": "Floral vintage shirt",
                "price": 20,
                "size": ["XL", "L", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/03/01/source-img/20160301102035_69373.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/03/01/source-img/20160301102036_39390.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Shirts"],
                "color": ["yellow", "blue"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac6c" },
                "title": "Blue dress with flowers",
                "price": 65,
                "size": ["L", "M", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/11/source-img/20161011102927_56464.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/11/source-img/20161011102927_19276.jpg"
                ],
                "rating": 5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Dresses"],
                "color": ["blue"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac6d" },
                "title": "Colorful hand print shirt",
                "price": 10,
                "size": ["XL", "L", "M", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/16/source-img/20180816184400_55304.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/16/source-img/20180816184400_99943.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/16/source-img/20180816184400_73042.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/16/source-img/20180816184400_34209.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/16/source-img/20180816184400_99943.jpg"
                ],
                "rating": 5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Shirts"],
                "color": ["yellow", "blue", "purple", "green"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac6e" },
                "title": "Tribes shirt",
                "price": 40,
                "size": ["XL", "L", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/06/27/source-img/20180627112849_31176.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/06/27/source-img/20180627112849_82331.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/06/27/source-img/20180627112849_81982.jpg"
                ],
                "rating": 2.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Shirts"],
                "color": ["yellow", "blue", "purple", "green"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac6f" },
                "title": "Cardigan pink",
                "price": 25,
                "size": ["XL", "L", "M"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/11/13/source-img/20171113182300_14554.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/11/13/source-img/20171113182300_89627.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/11/13/source-img/20171113182300_77800.jpg"
                ],
                "rating": 3.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Cardigans"],
                "color": ["pink", "white", "grey"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac70" },
                "title": "Brown top",
                "price": 40,
                "size": ["XL", "M", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/05/26/source-img/20170526120731_41451.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/05/26/source-img/20170526120731_84333.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/05/26/source-img/20170526120731_18788.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Tops"],
                "color": ["brown", "grey"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac71" },
                "title": "Black top",
                "price": 40,
                "size": ["XL", "M", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/08/source-img/20160708084843_14121.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/08/source-img/20160708084843_27096.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/08/source-img/20160708084843_64057.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Tops"],
                "color": ["black"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac72" },
                "title": "Orange top",
                "price": 50,
                "size": ["XL", "M", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/05/source-img/20160705154419_68755.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/05/source-img/20160705154419_63189.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/05/source-img/20160705154419_24527.jpg"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Tops"],
                "color": ["orange", "white"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac73" },
                "title": "Cute black top",
                "price": 52,
                "size": ["L", "M", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603103648_45209.JPG",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603103649_24529.JPG",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603103649_41517.JPG"
                ],
                "rating": 4.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Tops"],
                "color": ["black"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac74" },
                "title": "Top blue",
                "price": 52,
                "size": ["L", "M", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/05/31/source-img/20160531102830_15250.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/05/31/source-img/20160531102828_81224.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/05/31/source-img/20160531102829_59276.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Tops"],
                "color": ["blue"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac75" },
                "title": "Cardigan retro pattern",
                "price": 25,
                "size": ["XL", "L", "M", "S", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/15/source-img/20180815162429_82406.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/15/source-img/20180815162429_52228.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/15/source-img/20180815162429_11223.jpg"
                ],
                "rating": 3.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Cardigans"],
                "color": ["grey", "white"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac76" },
                "title": "Trench coat yellow",
                "price": 55,
                "size": ["XL", "L", "M", "S", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/25/source-img/20180925115448_33510.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/25/source-img/20180925115448_26493.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/25/source-img/20180925115448_99655.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Trench Coats"],
                "color": ["yellow"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac77" },
                "title": "Belted coat",
                "price": 55,
                "size": ["XL", "L", "M", "S", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/09/20/source-img/20160920110358_99584.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/09/20/source-img/20160920110358_75582.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/09/20/source-img/20160920110358_99584.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Trench Coats"],
                "color": ["yellow"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac78" },
                "title": "Trench coat blue",
                "price": 52,
                "size": ["L", "M", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/09/19/source-img/20160919113634_48148.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/09/19/source-img/20160919113636_70885.JPG",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/09/19/source-img/20160919113636_17032.JPG"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Trench Coats"],
                "color": ["blue"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac79" },
                "title": "Cardigan geometric pattern",
                "price": 25,
                "size": ["XL", "L", "M"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/26/source-img/20160726172732_94059.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/26/source-img/20160726172734_10558.JPG",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/26/source-img/20160726172737_31992.JPG"
                ],
                "rating": 3.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Cardigans"],
                "color": ["blue", "orange", "grey", "brown", "white"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac7a" },
                "title": "Two tone coat",
                "price": 60,
                "size": ["XL", "L", "S", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/12/source-img/20161012115126_54688.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/12/source-img/20161012115126_35399.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/10/12/source-img/20161012115126_56750.jpg"
                ],
                "rating": 5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Trench Coats"],
                "color": ["yellow"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac7b" },
                "title": "Cardigan vintage",
                "price": 40,
                "size": ["XL", "L", "M", "S", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/26/source-img/20171026172224_49873.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/26/source-img/20171026172224_24309.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/26/source-img/20171026172224_99399.jpg"
                ],
                "rating": 3.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Cardigans"],
                "color": ["grey", "white"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac7c" },
                "title": "Cardigan",
                "price": 65,
                "size": ["XL", "L", "M", "S"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/09/18/source-img/20170918122338_77829.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/09/18/source-img/20170918122338_12037.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/09/18/source-img/20170918122338_83261.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/09/18/source-img/20170918122338_57687.jpg"
                ],
                "rating": 3.5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Cardigans"],
                "color": ["blue", "white"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac7d" },
                "title": "Pineapple shirt",
                "price": 90,
                "size": ["XL", "L", "M"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/03/14/source-img/20180314181736_64374.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/03/14/source-img/20180314181736_96144.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/03/14/source-img/20180314181736_72768.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/03/14/source-img/20180314181736_88640.jpg"
                ],
                "rating": 5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Shirts"],
                "color": ["yellow", "blue", "brown", "green"]
              },
              {
                "_id": { "$oid": "5bb6b6936cfa75c4e50bac7e" },
                "title": "Paint rainbow shirt",
                "price": 20,
                "size": ["XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/07/source-img/20180907171700_93113.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/09/07/source-img/20180907171659_57045.png",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/07/source-img/20180807145503_75992.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/07/source-img/20180807145503_18112.jpg"
                ],
                "rating": 5,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Shirts"],
                "color": ["yellow", "blue", "brown", "green", "purple", "orange", "red"]
              },
              {
                "_id": { "$oid": "5bc814bee7179a4377fdda4b" },
                "title": "Polo grey",
                "price": 35,
                "size": ["XL", "L", "M", "S", "XS"],
                "images": [
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/05/03/source-img/20160503113122_29069.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/05/03/source-img/20160503113122_44873.jpg",
                  "https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/05/03/source-img/20160503113122_29686.jpg"
                ],
                "rating": 4,
                "description": "uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp",
                "tags": ["Polos"],
                "color": ["red", "grey", "blue"]
              }
            ]
    }

    render() {
        const card = this.state.items.splice(0, 10).map((item) => (
            <div className='card' key={item["_id"]["$oid"]}>

                <Img image={item.images[0]} />
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