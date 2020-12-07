import React from 'react';
import Products from './components/Products';
import data from './data.json';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      products: data.products,
      size:"",
      sort:"",

    }
  }

  render(){
    return ( <div className="grid-container">
        <header>
          <a href="/">Online Shopping Store</a>
        </header>
        <main>
          <div className="content">
            <div className="main-content">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights reserved </footer>
        
      </div>
      )

  }
  
}

export default App;
