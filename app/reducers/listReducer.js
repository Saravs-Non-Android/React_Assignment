const listReducer = (state = {data: ""}, action) => {
  switch(action.type) {
        case "Item_Data":
          state = {
                  ...state,
                  data: action.payload
              };
        break;
    }
   return state;
};
export default listReducer;