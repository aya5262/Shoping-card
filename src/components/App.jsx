import React, { Component } from 'react';
import Navbar from './navbar';
import ShopingCart from './shoppingCard';
class App extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
<Navbar/>
<main className = "container">
    <ShopingCart/>
</main>
        </React.Fragment> );
    }
}
 
export default App;