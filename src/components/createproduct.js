import { useState } from "react";
import ProductForm from "./productform";
function CreateProduct(props){
    let [showForm, setShowForm] = useState(false)
    function createProduct(product){
        props.createProduct(product)
        setShowForm(false)
    }
    function changeShowForm(){
        setShowForm(true)
    }
   return (

        <div className="row">
            <div className="col-lg-8 mx-auto" style={{background:"white",paddingBottom:30,marginBottom:20}}>
              { !showForm && <button className="btn btn-primary" onClick={changeShowForm}>Create</button>}
                {showForm && <ProductForm onCreateProduct = {createProduct}></ProductForm>}
            </div>
       </div>

   )
}

export default CreateProduct;