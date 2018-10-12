import React, { Component } from 'react';
import Footer from './Footer';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <div id="App">
        <Main />
        <div class="footer-home">
            <Footer/>
        </div>
      </div>
        
    );
  }
}

export default App;
