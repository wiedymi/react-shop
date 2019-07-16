import React, { Component } from 'react'

class Filter extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className='filter'>
                <form className='filter__form' onSubmit={this.handleSubmit}>
                    <label name='search'>Search</label>
                    <input type='text' name='search' placeholder='Something...' />
                    <button>Search It!</button>
                </form>
            </div>
        )
    }
}

export default Filter;