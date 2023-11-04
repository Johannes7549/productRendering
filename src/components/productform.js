import { useState } from "react";
import { useRef } from "react";

function ProductForm(props){
    let [pName, setpName] = useState();
    let [pPrice, setpPrice] = useState();
    let [pDescription, setpDescription]= useState();
    let [pAvailability, setpAvailability] = useState(false);
    let [pImg, setpImg] =  useState();
    function nameInputHandler(event){
        setpName(event.target.value)
    }
    function priceInputHandler(event){
        setpPrice(event.target.value)
    }
    function descriptionInputHandler(event){
        setpDescription(event.target.value)
    }
    function availabilityInputHandler(event){
        setpAvailability(event.target.checked)
    }
    function imgInputHandler(event){
        setpImg(event.target.value)
    }
    function createproduct(event){
        event.preventDefault();
        let product = {
            pID: 6, 
            pName: pName, 
            desc: pDescription,
            isAvailable: Boolean(pAvailability),
            image: pImg,
            price: Number(pPrice)
        }
        setpName('');
        setpDescription('');
        setpPrice('');
        setpAvailability(false);
        setpImg('');
        props.onCreateProduct(product)
    }
    return (
        <form className="row g-3" onSubmit={createproduct}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    onChange={nameInputHandler}
                    value={pName}/>
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    onChange={priceInputHandler}
                    value={pPrice} />
        </div>
        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    onChange={descriptionInputHandler}
                    value={pDescription} />
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" onChange={availabilityInputHandler} value={pAvailability}/>
            <label className="form-check-label" for="isAvailable" >Is product available in stock?</label>
        </div>
        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" onChange={imgInputHandler} value={pImg}/>
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    )
}

export default ProductForm;