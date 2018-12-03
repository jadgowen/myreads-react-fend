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
    //Returns results if query is not empty
    if (query !== "") {
      //Uses search function from BooksAPI to set values to state of queryResults array
      BooksAPI.search(query).then((queryResults) => {
        //If query has an error, returns empty array
        if(queryResults.error) {
          this.setState({ queryResults: [] })
        } else {
        this.setState({ queryResults })
        }
      })
    //Default state for query results
    } else {
      this.setState({ queryResults: [] })
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
            {/*Returns books based on query results, passes moveShelf function to Book component*/}
            {this.state.queryResults.map(queryResult =>
              <Book
                key={queryResult.id}
                {...queryResult}
                moveShelf={this.props.moveShelf}
              />
            )}
            {this.state.queryResults.length === 0 && this.state.query !== "" && (<h1>No Results Found</h1>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
