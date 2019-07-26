import API from './api';
import { fetchItem, fetchedItem } from './action';

const url = API.URL;

export default function() {
  return function fetchProductData(dispatch) {
    dispatch(fetchItem());
    return fetch(url)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Not 200 response');
        }
        return res.json();
      })
      .then(products => {
        if (products.length > 0) {
          return dispatch(fetchedItem(products));
        }
        return true;
      })
      .catch(err => {
        return new Error(err);
      });
  };
}
