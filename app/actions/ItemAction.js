import fetch from 'isomorphic-fetch';
import {RESOURCE_URL, ORDER_DATA, ITEM_DATA} from '../constants/ActionTypes';

export function ItemAction() {
  return dispatch => {
    return fetch(RESOURCE_URL, {method: 'GET'})
    .then(res => res.json())
    .then(json => dispatch({type: ITEM_DATA, payload: json.restaurant}));
  }
}
