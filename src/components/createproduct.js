import ProductForm from "./productform";
function CreateProduct(){
    function createProduct(product){
        console.log(product)
    }
   return (

        <div className="row">
            <div className="col-lg-8 mx-auto" style={{background:"white",paddingBottom:30,marginBottom:20}}>
                <ProductForm onCreateProduct = {createProduct}></ProductForm>
            </div>
       </div>

   )
}

export default CreateProduct;