/**
 * Created by Mohan Rathour on 19/06/17.
 */
import fetch from 'isomorphic-fetch';
import {RESOURCE_URL, SEARCH_DATA} from '../constants/ActionTypes';

/**
 * Search action to send data from action to your store, When action will dispatch,the state will update immediately.
 * It will hit the Get 'Restaurants' rest api to get restaurants data on to the basis of filters.
 * @returns {function(*)}
 * @constructor
 */
export function SearchItems(searchParams) {
  return dispatch => {
    let filter = {};
    searchParams.name ? (filter['name'] = searchParams.name) : '';
    searchParams.city ? (filter['city'] = searchParams.city.trim()) : '';
    searchParams.cuisine ? (filter['category'] = [searchParams.cuisine.trim()]) : [];
    searchParams.sortBy ? (filter['sort'] = searchParams.sortBy.trim()) : 'asc';
    searchParams.budget ? (filter['amount'] = searchParams.budget.trim()) : '';

    return fetch(RESOURCE_URL + '/search?filter=' + JSON.stringify(filter), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }).then(json => dispatch({type: SEARCH_DATA, payload: json.restaurant})).catch(error => {
      console.log('request failed', error);
    });
  }
}
