import React, {Component} from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel,InputGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';
import BooksContainer from './BooksContainer';
import './SearchView.css';

class SearchView extends Component {

  constructor(props){
      super(props);
      this.state = {
          query: '',
          items: [],
          lastQuery: ''
      };
  }
  search(){
      const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=harry%20potter';
      fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
          let {items} = json;
          this.setState({items});
          this.setState({lastQuery : this.state.query });
          console.log(json);
      });
  }

  render() {
    return (<Grid>
      <Row className="show-grid">
        <Col sm={12} md={12}>
          <Row>
            <div className="flex-center position-ref full-height">
              <div className="logo">
                  <img src="http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png" width="130"/>
              </div>
              <div className="col-md-12">
                <div className="title col-md-12">Google Books</div>
                <div class="input-group">
                  <FormControl
                      type = "text"
                      className="input-lg flat"
                      placeholder = "Search for a book"
                      onChange = { event => this.setState({query: event.target.value})}
                      onKeyPress = { event => {
                          if(event.key == "Enter"){
                              this.search();
                          }
                  }}/>
                  <span class="input-group-btn">
                    <input
                      onClick={() => this.search()}
                      className="btn btn-lightblue btn-lg flat"
                      type="submit"
                      value="Search"
                    />
                  </span>
                </div>

                <BooksContainer
                  items = {this.state.items}
                  query = {this.state.lastQuery}
                />
              </div>
            </div>
          </Row>

        </Col>
      </Row>
    </Grid>);
  }
}

export default SearchView;
