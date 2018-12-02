import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

class Book extends Component {
  render() {
    const book = this.props
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : ""}} ></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {/*Return multiple authors on new lines, inspired by https://stackoverflow.com/questions/34034038/how-to-render-react-components-by-using-map-and-join*/}
          <div className="book-authors">{book.authors ? book.authors.map(author => <div key={author}>{author}</div>) : "No Author"}</div>
        </div>
      </li>
    )
  }
}

export default Book
