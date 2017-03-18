import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import { AboutPage, DrawingsPage, HomePage } from '../layout';
import logo from '../images/logo_name.png';

const Links = () => (
  <div id="nav">
  <Menu secondary className="mobile hidden tablet hidden">
    <Menu.Item>
      <NavLink exact className="link-logo" activeClassName="active" to="/">
        <Image id="logo" src={logo} alt="Drygon Logo" size="tiny" spaced="right"/>
      </NavLink>
    </Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/about">About Us</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/drawings">Drawings</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/training">Training</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/services">Services</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/stories">Stories</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/designs">Designs</NavLink></Menu.Item>
  </Menu>
  
   <Menu size="mini" vertical className="mobile only tablet only">
    <Menu.Item>
      <NavLink exact className="link-logo" activeClassName="active" to="/">
        <Image id="logo" src={logo} alt="Drygon Logo" size="tiny" spaced="right"/>
      </NavLink>
    </Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/about">About Us</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/drawings">Drawings</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/training">Training</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/services">Services</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/stories">Stories</NavLink></Menu.Item>
    <Menu.Item><NavLink activeClassName="active" to="/designs">Designs</NavLink></Menu.Item>
  </Menu>
  </div>
 
);

const NavBar = () => (
  <div>
    <Links />
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/drawings" component={DrawingsPage} />
  </div>
);

export default NavBar;