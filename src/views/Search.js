import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'

class Search extends Component {
  state = {
    //Default state for query string
    query:"",
    //Empty array to story query results
    queryResults: []
  }

  updateQuery = (query) => {
    //Sets state of query based on input
    this.setState({ query })
    //Returns results based on query
    this.showResults(query)
  }

  showResults = (query) => {
    if (query) {
      //Uses search function from BooksAPI to set values to state of queryResults array
      BooksAPI.search(query).then((queryResults) => {
        this.setState({ queryResults })
      })
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.queryResults.map(queryResult =>

            <Book
              key={queryResult.id}
              {...queryResult}
              moveShelf={this.props.moveShelf}
            />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
