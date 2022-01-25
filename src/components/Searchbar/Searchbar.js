import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <>
              <div id="search">
                  <form action="#" method="get">
                    <input className="search-submit" type="submit" />
                    <input id="m_search" name="s" type="text" placeholder="Type and hit enter..." />                        
                  </form>
                </div>{/* #search end */}   
            </>
        )
    }
}
