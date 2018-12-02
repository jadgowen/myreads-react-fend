import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    const shelf = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books &&
            this.props.books
              .map(book =>
              <Book
                key = {book.id}
                {...book}
              />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
