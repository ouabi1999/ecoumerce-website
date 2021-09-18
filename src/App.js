
import React from 'react'
import './App.css';
import products from "./data.js"
import "./App.css"
import Products from './components/products';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products:products,
      size:"",
      sort:""
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
              <Products products={this.state.products}/>
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
        

      </div>
    )
  }
}

