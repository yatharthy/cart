
export const initialState = {
    cart: [],
    total: 0
  };
  
  export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART"
  };
  
  const totalReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        const { pName, price } = action.payload;
        return {
          ...state,
          cart: [...state.cart, { pName, price }],
          total: state.total + parseInt(price)
        };
      default:
        return state;
    }
  };
  
  export default totalReducer;
  