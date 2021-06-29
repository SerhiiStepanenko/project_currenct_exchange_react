import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
          <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><NavLink 
                  to="/">
                    Главная
                    </NavLink></li>
                  <li><NavLink 
                  to="/about">
                    О нас
                  </NavLink></li>
                </ul>
              </nav>
            </div>
          </div>
    );
  }
}

export default Nav;
