import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWork } from '../actions/index';
import { bindActionCreators } from 'redux';
// import {Navbar,NavbarHeader,NavbarBrand,NavbarItem,NavDropdown,MenuItem} from 'react-bootstrap';
class MenuList extends Component {

  render() {
    return (
      
        <nav className="nav">
					<ul>
						<li><a href="/" className="active">Home</a></li>
						<li><a href="work">Work</a></li>
						<li><a href="upload">Upload</a></li>
					</ul>
          </nav>
				
    
    );
  }
}


export default MenuList;