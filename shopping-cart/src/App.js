import React, { useReducer } from 'react';
import './App.css';
import Cart from './components/Cart';
import Total from './components/Total';
import TotalContext from './store/total-context';
import totalReducer, { initialState, actionTypes } from './reducers/totalReducer';

function App() {
  const products = [
    { pName: 'Apple', price: 20 },
    { pName: 'Banana', price: 3 },
    { pName: 'Orange', price: 10 },
    { pName: 'Grapes', price: 8 }
  ];


  const [state, dispatch] = useReducer(totalReducer, initialState);

  const handleProdChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;


    dispatch({ type: actionTypes.ADD_TO_CART, payload: { pName, price } });
  };

  return (
    <div className="App">
      <div className="customDiv">
        <h3>Purchase </h3>
        <hr />
        <select onChange={handleProdChange}>
          {products.map((product, index) => (
            <option value={product.price} key={index}>
              {product.pName} - ${product.price}
            </option>
          ))}
        </select>
      </div>

      {/* Provide cart state using context */}
      <TotalContext.Provider value={state.total}>
        <Cart cart={state.cart} />
        <Total />
      </TotalContext.Provider>
    </div>
  );
}

export default App;
