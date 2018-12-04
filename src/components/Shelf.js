import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/*If books exist, return books*/}
            {this.props.books &&
            this.props.books
              .map(book =>
              <Book
                key = {book.id}
                {...book}
                moveShelf={this.props.moveShelf}
                onShelf={this.props.books.filter(shelf => shelf.id === book.id)}
              />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
