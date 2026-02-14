import Urun from "./components/Urun"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import UrunDetay from "./components/UrunDetay";

function App() {
 const products=["iphone 11","Apple watch","samsung s8"];
  return (
    <div>
   
      <Router>
             <Urun products={products}></Urun> 
        <Routes>
          <Route path= ".\UrunDetay\:productId" element={<UrunDetay></UrunDetay>}>
        
          </Route>
        </Routes>
      </Router>
 
    </div>
  )


}
export default App
