import { useState } from 'react';
import './App.css';
import CreateProduct from './components/createproduct';
import Products from './components/product';
import FilterProduct from './components/FilterProducts/filterproduct';

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
  let [filterValue, setFileterValue] = useState('all') 
  let filteredList = newProductList.filter((product)=>{
    if (filterValue==="available"){
      return product.isAvailable === true
    }else if (filterValue==="unavailable"){
      return product.isAvailable===false
    }else{
      return product
    }
  })
  function createProduct(product){
    product.pID = newProductList.length+1
    setNewProductList([product, ...newProductList])

  }
  function onFilterValue(filter){
    setFileterValue(filter)
  }
  return (
    <div>
    <div className='row'>
    <CreateProduct createProduct={createProduct}></CreateProduct>
      <div className='col-lg-8 mx-auto'>
      <FilterProduct filterProduct ={onFilterValue}></FilterProduct>
        <ul className='list-group shadow'>
          {
            filteredList.map((product)=>{
              return <Products
                        key ={product?.pID}
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
