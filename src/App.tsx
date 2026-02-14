import Urun from "./components/Urun"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
 
const products=["iphone 11","Apple watch","samsung s8"];
  return (
    <>
      <div>
        
        <Urun products={products}></Urun>
        
        </div>
        
    </>
  )
}

export default App
