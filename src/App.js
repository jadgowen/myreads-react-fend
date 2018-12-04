import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './views/Search'
import Home from './views/Home'
import CatchAll from './components/Catch-All'
import { Route, Switch } from 'react-router-dom'

class BooksApp extends React.Component {
  //Empty array to store book objects
  state = {
    books: []
  }

  //Uses getAll to retrieve books, updates books state
  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //Call getBooks if the component mounted correctly
  componentDidMount() {
    this.getBooks()
  }

  //Moves books to new shelf and updates books state
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.getBooks()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="app">
        {/*Added Switch to handle 404 errors per reviewer suggestion*/}
        <Switch>
          {/*Displays Home view and passes books state and moveShelf function*/}
          <Route exact path={"/"} render={() => (
            <Home
              books={this.state.books}
              moveShelf={this.moveShelf}
            />
          )}/>
          {/*Displays Search view and passes books state and moveShelf function*/}
          <Route exact path={"/search"} render={() => (
            <Search
              books={this.state.books}
              moveShelf={this.moveShelf}
            />
          )}/>
          <Route component={CatchAll}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
