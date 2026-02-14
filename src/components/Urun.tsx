import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function Urun({products}){

    return(
       <table className="table table-bordered">
        <tr>
            <th>id</th>
            <th>Adi</th>
            <th>Detay</th>
        </tr>
        {products.map((product,index)=>{
            return<tr >
              <td>{index}</td>
                <td key={index}>{product}</td>
                <td>Detay</td>
            </tr>
        })}
       </table>
    )
}export default Urun