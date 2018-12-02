import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './views/Search'
import Home from './views/Home'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
            <Route exact path={"/"} render={() => (
              <Home
                books={this.state.books}
              />
            )}/>
            <Route exact path={"/search"} render={() => (
              <Search
                books={this.state.books}
              />
            )}/>
      </div>
    )
  }
}

export default BooksApp
