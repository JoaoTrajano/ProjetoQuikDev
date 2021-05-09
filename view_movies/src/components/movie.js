import React, { Component } from 'react'
import MovieDetails from './movidedetails';
import { Button } from '@material-ui/core';

class Movie extends Component {

    constructor(props) {

        super()

        this.state = {
            viewDetailsMovie: false
        }
    }

    render() {
        return (
            <div className="div-movie_complete">
                <div>

                    <span>
                        <b>{this.props.nameMovie}</b>
                    </span>

                </div>
                <div>
                    <img src={"http://image.tmdb.org/t/p/w185/" + this.props.poster} alt={this.props.nameAlt} />
                </div>
                <div>
                    <span><b>Release Date:</b> {this.props.dateRelease} </span>
                    <span><b>Genre:</b> {
                        this.props.genres.map((genre) => {
                            return this.props.genresArray[genre] + " / "
                        })
                    } </span>
                </div>
                <div id="div-overview">
                    <span>{this.props.resumo}</span>
                </div>
                <div id="div-overview">
                    <Button variant="contained" color="primary" onClick={() => {
                        if (this.state.viewDetailsMovie) {
                            this.setState({ viewDetailsMovie: false })
                        } else {
                            this.setState({ viewDetailsMovie: true })
                        }

                    }}>
                        <span>More Details...</span>
                    </Button>

                    {(this.state.viewDetailsMovie) ? 
                        <MovieDetails idMovie={this.props.id}/> : <div></div>}
                </div>

            </div>


        )
    }
}

export default Movie