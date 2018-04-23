import React, { Component } from 'react';
import BookDetails from './BookDetails';
import './BooksContainer.css';

class BooksContainer extends Component {
  render(){
    let altImage = 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png';
    let noPrice = 'Not For Sale';
    return(
      <div className="book-list-wrapper">
      {
          this.props.query ? (
              <div className="col-sm-12">
                  <p className="search-status">Search Results For: {this.props.query}</p>
              </div>
          ):null
      }

      {
          this.props.items.map((item, index) => {
              let {title, imageLinks, infoLink, description, categories, authors} = item.volumeInfo;
              let {amount} = item.saleInfo.listPrice !== undefined ? item.saleInfo.listPrice : noPrice ;
              let bookTitle = item.volumeInfo.title;
              let modalTitle = item.volumeInfo.title;
              if(bookTitle.length > 20){
                  bookTitle = bookTitle.substring(0,30) + '...';
              }
              return(
                  <div key={index} className="col-xs-12 col-sm-5 col-md-3 col-lg-2 book-column">
                      <div className="book-wrapper">
                          <a className="book" href={infoLink} target="_blank">
                              <div className="book-image-wrapper">
                                  <img src={imageLinks !== undefined ? imageLinks.thumbnail : altImage}
                                  alt="Book Image"
                                  className="book-image"
                                  />
                              </div>
                              <div className="book-price gray-text">{amount !== undefined ? '$' + amount : noPrice}</div>
                              <div className="book-title gray-text">
                                  <p>{bookTitle}</p>
                              </div>
                          </a>
                          <BookDetails bookTitle = {modalTitle}
                          bookDesc = {description}
                          bookCat = {categories}
                          bookAuth = {authors}
                          bookLink = {infoLink}
                           />
                      </div>
                  </div>
              )
          })
      }
      </div>
    );
  }
}

export default BooksContainer;
