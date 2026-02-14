import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Link } from "react-router-dom";

function Urun({products}){
const[ProductList,setProductList]=useState(products)
const[newProduct,setNewProduct]=useState("");
const addProduct=()=>{
    setProductList([...ProductList,newProduct]);
    setNewProduct(" ");
}
return(
    <><table className="table table-bordered">
        <tr>
            <th>id</th>
            <th>Ad</th>
            <th>Detay</th>
        </tr>
        {ProductList.map((product, index) => {
            return <tr>
                <td>{index}</td>
                <td>{product}</td>
                <td><Link to={`./UrunDetay/${index}`}>Detay</Link></td>
            </tr>;
        })}
    </table><input type="text" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} /><button type="button" onClick={addProduct}>Görev ekle</button></>
    )} 
export default Urun