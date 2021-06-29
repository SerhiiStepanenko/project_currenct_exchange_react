import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About/About';

import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Rate from './Rate/Rate';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="container">
            <main>
              <Switch>
                <Route exact path='/' component={Rate}></Route>
                <Route exact path='/about' component={About}></Route>
              </Switch>
            </main>
          </div>
        </Router>
        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br />В
                  частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
              местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
