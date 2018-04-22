import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import './SearchView.css';

class SearchView extends Component {
  	
  	constructor(props, context) {
    	super(props, context);
    	this.handleChange = this.handleChange.bind(this);
    	this.state = {
      		value: ''
	    };
  	}

  	getValidationState() {
    	const length = this.state.value.length;
    	if (length > 10) return 'success';
    	else if (length > 5) return 'warning';
    	else if (length > 0) return 'error';
    	return null;
  	}

  	handleChange(e) {
    	this.setState({ value: e.target.value });
  	}
  	
    render() {
        return (
		   	<Grid>
			    <Row className="show-grid">
			      	<Col sm={12} md={12}>
			      		<Row>
				        	<div className="flex-center position-ref full-height">
				                <div className="title m-b-md">
				                    Google Books
				                </div>
		                        <form>
							        <FormGroup
							          controlId="formBasicText"
							          validationState={this.getValidationState()}
							        >
							          <ControlLabel>Working example with validation</ControlLabel>
							          <FormControl
							            type="text"
							            value={this.state.value}
							            placeholder="Search Book"
							            onChange={this.handleChange}
							          />
							          <FormControl.Feedback />
							          <HelpBlock>Validation is based on string length.</HelpBlock>
							        </FormGroup>
							      </form>
				            </div>
			            </Row>
					    
			      	</Col>
			    </Row>
		  	</Grid> 
        );
    }
}

export default SearchView;