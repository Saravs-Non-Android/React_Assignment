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
    // TODO-8.1- > Call the search filter api  with the help of fetch module call that is given below into the TODO section and return the promise object as similar to other Action call.

  }
}
