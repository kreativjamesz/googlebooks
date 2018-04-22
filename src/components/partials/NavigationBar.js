import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
    		    <Navbar inverse collapseOnSelect className="navbar-fixed-top">
				  	<Navbar.Header>
				    	<Navbar.Brand><a href="#brand">Google Books</a></Navbar.Brand>
			    		<Navbar.Toggle />
				  	</Navbar.Header>
				  	<Navbar.Collapse>
				    	<Nav>
				      		<NavItem eventKey={1} href="#">Home</NavItem>
				      		<NavItem eventKey={2} href="#">About Us</NavItem>
				      		<NavItem eventKey={3} href="#">Contact Us</NavItem>
				    	</Nav>
				    	<Nav pullRight>
				      		<NavItem eventKey={1} href="#">Link Right</NavItem>
				      		<NavItem eventKey={2} href="#">Link Right</NavItem>
				      		<NavDropdown eventKey={3} title="My Account" id="basic-nav-dropdown">
				        		<MenuItem eventKey={3.1}>Profile</MenuItem>
				        		<MenuItem eventKey={3.2}>PrIvacy Settings</MenuItem>
				        		<MenuItem eventKey={3.3}>Favorites</MenuItem>
				        		<MenuItem divider />
				        		<MenuItem eventKey={3.3}>Login</MenuItem>
				      		</NavDropdown>
				    	</Nav>
				  	</Navbar.Collapse>
				</Navbar>
        );
    }
}

export default NavigationBar;