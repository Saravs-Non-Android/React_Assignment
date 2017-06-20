let initialState = {
  items: "",
  message: ""
}

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
