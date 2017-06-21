import fetch from 'isomorphic-fetch';
import {RESOURCE_URL, ORDER_DATA} from '../constants/ActionTypes';

export function AddToCartAction(cartData) {
  return dispatch => {
    return fetch(RESOURCE_URL + '/order', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"_id": cartData})
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.statusText;
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).then(response => dispatch({type: ORDER_DATA, payload: response})).catch(error => {
      console.log('request failed', error);
    });
  }
}
