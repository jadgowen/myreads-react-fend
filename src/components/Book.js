import React, { Component } from 'react'

class Book extends Component {
  render() {
    //Convert ID prop to object for BooksAPI update function
    const bookID = {id : this.props.id}
    return(
      <li>
        <div className="book">
          <div className="book-top">
            {/*If imageLinks prop exists, return thumbnail*/}
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: this.props.imageLinks ? `url("${this.props.imageLinks.thumbnail}")` : ""
              }}
            >
            </div>
            <div className="book-shelf-changer">
              {/*Update book to new shelf, default to none if no shelf prop exists*/}
              <select
                id={this.props.id}
                onChange={(e) => this.props.moveShelf(bookID, e.target.value)}
                defaultValue={this.props.shelf ? this.props.shelf : 'none'}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          {/*Return multiple authors on new lines, inspired by https://stackoverflow.com/questions/34034038/how-to-render-react-components-by-using-map-and-join*/}
          <div className="book-authors">
            {this.props.authors ? this.props.authors.map(author => <div key={author}>{author}</div>) : "No Author"}
          </div>
        </div>
      </li>
    )
  }
}

export default Book
