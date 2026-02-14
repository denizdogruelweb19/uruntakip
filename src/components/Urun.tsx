import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function Urun({products}){
    return(
       <table className="table table-bordered">
        <tr>
            <th>id</th>
            <th>Adi</th>
        </tr>
        {products.map((product,index)=>{
            <tr key={index}>
                <td>{index}</td>
                <td>{product}</td>
            </tr>
        })}
       </table>
    )
}export default Urun