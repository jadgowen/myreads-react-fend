import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../components/Shelf'



class Home extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <Shelf
              title="Currently Reading"
              books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
              moveShelf={this.props.moveShelf}
            />
            <Shelf
              title="Want To Read"
              books={this.props.books.filter(book => book.shelf === 'wantToRead')}
              moveShelf={this.props.moveShelf}
            />
            <Shelf
              title="Read"
              books={this.props.books.filter(book => book.shelf === 'read')}
              moveShelf={this.props.moveShelf}
            />
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default Home
