import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/about/about';
// import Contact from './components/contact/contact';

import './App.css';

// import logo from './logo.svg';

class App extends React.Component {

  // fake authentication Promise
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 3000)) // 3 seconds
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele) {
        // fade out
        ele.classList.add('finish')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 1000)
      }
    })
  }

  render() {
    return (
      
      <div className='app'>
   
        
        <Router>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            {/* <Route path='/contact' component={Contact}/> */}
          </Switch>
          
          <Navbar/>
          <Footer/>
          
        </Router>

      </div>
    );
  }

}

export default App;