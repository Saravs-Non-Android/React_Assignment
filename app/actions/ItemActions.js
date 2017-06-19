import fetch from 'isomorphic-fetch';
const resourceUrl = "http://localhost:8888/api/restaurant";
const Item_Data="Item_Data";
export function ItemAction() {
     return dispatch => {
     	console.log("resource URl", resourceUrl);
        return fetch(resourceUrl,
          {
                method: 'GET'
          })
            .then(res => res.json())
            .then(json => dispatch({type: Item_Data, payload: json.restaurant}));
    }
}
