
import React from 'react'
import './App.css';
import products from "./data.js"
import "./App.css"
import Products from './components/products';
import Filter from './components/Filter';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products:products,
      size:"",
      sort:""
    }
  }

  sortProducts = (event) =>{
    const sort = event.target.value;
      this.setState((state) =>({
        sort:sort,
        products:state.products.sort((a,b) =>(
          sort ==="lowest"
          ? a.price > b.price
            ?1
            :-1
          :sort === "highest"
          ? a.price < b.price
            ?1
            :-1
          :a.id < b.id
          ? 1
          : - 1

        )

        )}))
  }



  filterProducts = (event) => {
    if(event.target.value === ""){
      this.setState({
        size:event.target.value,
        products:products
      })
    }else{
      this.setState({
        size:event.target.value,
        products:products.filter(product => product.availableSizes.indexOf(event.target.value)>=0)
      })
  }
}
  render() {
    return (
      <div className="grid-container">
        <hedaer>
          <a href="/">React shoppin cart</a>
        </hedaer>
        <main>
          <div className="content">
          <div className="sidebar">
              Cart items
            </div>
            <div className="main">
              <Filter 
                  count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts ={this.sortProducts}
                

              />
              <Products products={this.state.products}/>
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
        

      </div>
    )
  }
}

