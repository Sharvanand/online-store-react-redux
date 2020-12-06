import React from 'react';
import data from './data.json';

class App extends React.Component () {


  render(){
    return ( <div className="grid-container">
        <header>
          <a href="/">Online Shopping Store</a>
        </header>
        <main>Product List</main>
        <footer>All rights reserved </footer>
        
      </div>
      )

  }
  
}

export default App;
