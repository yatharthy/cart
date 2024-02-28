import { useContext } from "react";
import TotalContext from "../store/total-context";

const Cart=(props)=>{
    const total = useContext(TotalContext);
    return(
     
          
            <div className="customDiv">
            <h3>Cart </h3>
            <hr/>
             <ul>
               {
                 props.cart.map((product,index)=>{
                   return(
                     <li key={index}>{product.pName} </li>
                   )
                 })
               }
             </ul>
             {total}
         </div>
   
          )
     
    
}

export default Cart;