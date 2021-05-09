import React, { Component } from 'react'

class Filter extends Component {

    render() {
        return (
            <div className="div-filter">

                Filter by Genre or Title:
                <input
                    class="div-filter-input"
                    type="text"
                    onChange={this.props.filterGenreTitle}
                />

            </div>
        )
    }

}

export default Filter