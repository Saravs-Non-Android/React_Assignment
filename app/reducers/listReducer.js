/**
 * Created by Mohan Rathour on 18/06/17.
 */

/**
 * Initialize the initial state properties.
 * @type {{items: string, message: string}}
 */
let initialState = {
  items: "",
  message: ""
}

/**
 * Handle the Action event and return the data according to Action event.
 * @param state
 * @param action
 * @returns {{items: string, message: string}}
 */
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Item_Data":
      //TODO- 13 Handle the Item_Data, Order_Data action and return the response from reducer similar like Search_Data
      break;
    case "Order_Data":
      //TODO- 13 Handle the Item_Data, Order_Data action and return the response from reducer similar like Search_Data
    case "Search_Data":
      state = {
        ...state,
        items: action.payload
      };
      break;
  }
  return state;
};
export default listReducer;
