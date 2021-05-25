import React, {Component } from "react";
import Product from "./product";
class ShopingCart extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 2 },
      { id: 2, name: "Fries", count: 1 },
      { id: 3, name: "can", count: 3 },
    ]
  };


  handleDelete = product=>{
    const newproducts = this.state.products.filter(p=>p.id !==product.id);
    this.setState({products : newproducts});//==this.setState({products}) if new and old have the same name
  }
//clone
//edit
//setstate
handleReset = ()=>{
//clone
let  products = [...this.state.products]
products  =products.map(p =>{
  p.count = 0;
  return p;
});
this.setState({products});
//edit
//setstate
}
IncrementHandler = product => {
  //deep cloneinng
const products = [...this.state.products];//clone array []
const index = products.indexOf(product)  ;
products[index] ={...products[index]}//clone object{},... spred operator
//edit
products[index].count++;
  //setstate
this.setState({products})
};

  
  render() {
    return(
      <React.Fragment>
        <h1>Shoping Card</h1>
        <button className="bbtn btn-secondary m-2" onClick={this.handleReset}>RESET</button>
        {this.state.products.map(product =>(
            <Product key = {product.id} product ={product} onDelete = {this.handleDelete} onIncrement ={this.IncrementHandler}/>
        ))}
      
        

      </React.Fragment>
    );
  }
}

export default ShopingCart;
