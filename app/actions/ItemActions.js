import fetch from 'isomorphic-fetch';
const resourceUrl = "http://localhost:8888/api/restaurant";
const Item_Data = "Item_Data",
      Order_Data = "Order_Data",
      Search_Data = "Search_Data";
export function ItemAction() {
  return dispatch => {
    return fetch(resourceUrl, {method: 'GET'}).then(res => res.json()).then(json => dispatch({type: Item_Data, payload: json.restaurant}));
  }
}
export function AddToCartAction(cartData) {
  return dispatch => {
    return fetch(resourceUrl + '/order', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"_id": cartData})
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        return response.statusText;
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        //LoginActions.loginError();
        throw error;
      }
    }).then(response => dispatch({type: Order_Data, payload: response})).catch(error => {
      console.log('request failed', error);
    });
  }
}
