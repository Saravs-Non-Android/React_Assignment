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
      state = {
        ...state,
        items: action.payload
      };
      break;
    case "Order_Data":
      state = {
        ...state,
        message: action.payload
      };
      break;
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
