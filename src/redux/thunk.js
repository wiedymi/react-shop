import { handleCheckLocalStorage, handleGetData } from './handlers'
import { setItems, fetchItem, fetchedItem, fetchedItemError, setColors } from './action'

const url = 'https://gist.githubusercontent.com/AnDrOlEiN/b626d327c77b7a4f2cc105bdb0c44786/raw/90374f0b3bb23533ea7c67cf9f66ed9c8152ffb0/data.json';

export default function() {
    return function(dispatch) {
        dispatch(fetchItem());
        return fetch(url)
                .then((res) => res.json())
                .then((products) => {
                    if(!handleCheckLocalStorage('products')){
                        localStorage.setItem('products', JSON.stringify(products));
                        dispatch(fetchedItem());
                        dispatch(setColors(products));
                        return dispatch(setItems(products)); 
                    } else {
                        return dispatch(fetchedItem(handleGetData('products')));
                    }            
                })
                .catch(() => {
                    return dispatch(fetchedItemError());                 
                });  
    }
}