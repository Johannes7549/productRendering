import Button from "./button";
import { useState } from "react";
function ProductDetails(props){
    let badgeClass = "badge-margin-left-40 badge ";
    badgeClass += props.isAvailable === true ? "bg-success" : "bg-danger";
    let [productCount, setProductCount] = useState(0);
    function incrementProductCount(){
        setProductCount(++productCount)

    }
    function decrementProductCount(){
        if (productCount>0){
            setProductCount(--productCount)
        }
        
    }
    function disableButton(){
        if (props.productLimit==productCount){
            return false
        }
    }
    return (
        <div class="d-flex align-items-center justify-content-start mt-1">
                  <h6 class="font-weight-bold my-2 mx-2">{props.price}</h6>
                  <Button eventhandler = {decrementProductCount} >-</Button>
                  <span style={{padding:"14px 12px",fontSize:"14px "}}>{productCount}</span>
                  <Button  eventhandler= {incrementProductCount} disabled = {disableButton}>+</Button>
                  <span className={badgeClass}>{props.isAvailable === true?"Available":"Unavailable"}</span>
        </div>
    )
}

export default ProductDetails;