import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './views/Search'
import Home from './views/Home'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Route exact path={"/"} render={() => (
              <Home/>
            )}/>
            <Route exact path={"/search"} render={() => (
              <Search/>
            )}/>

          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
