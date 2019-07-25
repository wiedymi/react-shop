import { isInLocalStorage, getDataFromLocalStorage, constants } from './handlers';
import { setItems, fetchItem, fetchedItem, fetchedItemError, setColors } from './action';

const url = constants.API;

export default function() {
  return function fetchProductData(dispatch) {
    dispatch(fetchItem());
    return fetch(url)
      .then(res => res.json())
      .then(products => {
        if (products.length > 0) {
          if (!isInLocalStorage(constants.PRODUCTS)) {
            localStorage.setItem(constants.PRODUCTS, JSON.stringify(products));
            dispatch(setItems(products));
            dispatch(setColors(products));
            return dispatch(fetchedItem());
          }
          return dispatch(fetchedItem(getDataFromLocalStorage(constants.PRODUCTS)));
        }
        return true;
      })
      .catch(() => {
        return dispatch(fetchedItemError());
      });
  };
}
