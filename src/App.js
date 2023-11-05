import { useState } from 'react';
import './App.css';
import CreateProduct from './components/createproduct';
import Products from './components/product';

let products = [
  {
      pID: 1, 
      pName: 'Fresh Milk', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: 'images/fresh-milk.png',
      price: 12
  },
  {
      pID: 2, 
      pName: 'Cottage cheese', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/cottage-cheese.png",
      price: 10
  },
  {
      pID: 3, 
      pName: 'Brocoli', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/brocoli.png",
      price: 15
  },
  {
      pID: 4, 
      pName: 'oranges', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/oranges.png",
      price: 20
  },
  {
      pID: 5, 
      pName: 'Olive oil', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/olive-oil.png",
      price: 14
  }
];
function App() {
  let [newProductList, setNewProductList] = useState(products)
  function createProduct(product){
    setNewProductList([product, ...newProductList])
  }
  return (
    <div>
    <CreateProduct createProduct={createProduct}></CreateProduct>
    <div className='row'>
      <div className='col-lg-8 mx-auto'>
        <ul className='list-group shadow'>
          {
            newProductList.map((product)=>{
              return <Products
                        pId={product?.pID}
                        name = {product?.pName}
                        description = {product?.desc}
                        isAvailable = {product?.isAvailable}
                        imgURL = {product?.image}
                        price = {product?.price}
                        maxLimit = {product?.maxLimit}
                      ></Products>
            })
          }
        </ul>
      </div>
    </div>
    </div>

  )
}

export default App;
