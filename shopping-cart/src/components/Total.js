import TotalContext from "../store/total-context";

const Total=()=>{
    return(
        <TotalContext.Consumer>
            {(total)=>{
                return(
                    <div className="totalContainer">
                    <h3>Total </h3>
                    <hr/>
                     <h2>Total : {total}</h2>
                 </div>
            
                )
            }}
     </TotalContext.Consumer>
    )
}
export default Total;