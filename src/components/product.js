import { useState } from "react";
import ProductDetails from "./productdetails";

function Products(props){
  return (
        <ul class="list-group shadow">
          <li class="list-group-item">
            <div class="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
              <div class="media-body order-2 order-lg-1">
                <h5 class="mt-0 font-weight-bold mb-2">{props.name}</h5>
                <p class="font-italic text-muted mb-0 small">{props.description}</p>
                <ProductDetails price = {props.price} isAvailable = {props.isAvailable}></ProductDetails>
              </div><img src={props.imgURL} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2" />
              </div>
          </li>
      </ul>
  )
}

export default Products;