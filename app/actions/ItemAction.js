import fetch from 'isomorphic-fetch';
import {RESOURCE_URL, ORDER_DATA, ITEM_DATA} from '../constants/ActionTypes';

export function ItemAction() {
  return dispatch => {
    return fetch(RESOURCE_URL, {method: 'GET'}).then(res => res.json()).then(json => dispatch({type: ITEM_DATA, payload: json.restaurant}));
  }
}
// export function AddToCartAction(cartData) {
//   return dispatch => {
//     return fetch(RESOURCE_URL + '/order', {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({"_id": cartData})
//     }).then(response => {
//       if (response.status >= 200 && response.status < 300) {
//         console.log(response);
//         return response.statusText;
//       } else {
//         const error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//       }
//     }).then(response => dispatch({type: ORDER_DATA, payload: response})).catch(error => {
//       console.log('request failed', error);
//     });
//   }
// }

// export function SearchItems(searchParams) {
//   return dispatch => {
//     let filter = {};
//     searchParams.name ? (filter['name'] = searchParams.name) : '';
//     searchParams.city ? (filter['city'] = searchParams.city.trim()) : '';
//     searchParams.cuisine ? (filter['category'] = [searchParams.cuisine.trim()]) : [];
//     searchParams.sortBy ? (filter['sort'] = searchParams.sortBy.trim()) : 'asc';
//     searchParams.budget ? (filter['amount'] = searchParams.budget.trim()) : '';
//
//     return fetch(resourceUrl + '/search?filter=' + JSON.stringify(filter), {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(response => {
//       if (response.status >= 200 && response.status < 300) {
//         console.log(response);
//         return response.json();
//       } else {
//         const error = new Error(response.statusText);
//         error.response = response;
//         //LoginActions.loginError();
//         throw error;
//       }
//     }).then(json => dispatch({type: Search_Data, payload: json.restaurant})).catch(error => {
//       console.log('request failed', error);
//     });
//   }
// }
