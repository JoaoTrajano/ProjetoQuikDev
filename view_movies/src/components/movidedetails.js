import React, { Component } from 'react'
import axios from 'axios'

class MovieDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            movideDetails: []
        }
        
    }

    componentDidMount = () => {
        this.getMovieDetails()
    }

    getMovieDetails = () => {
        axios.get('http://127.0.0.1:8000/api/movies/details/' + this.props.idMovie).then((resp => {
            this.setState({ movideDetails: resp.data.production_companies })
        }))
    }
    render() {
        
        return (
            <div>
                <div id="movie-title">
                    <span>Production Companies</span>
                </div>
                <div id="movie-details">
                
                {
                   this.state.movideDetails.map((resp) => {
                       return <div className="div-movie-details">
                          <div> 
                              <img src={"http://image.tmdb.org/t/p/w185/" + resp.logo_path } alt={resp.name} />
                          </div>
                       </div>
                   })
               }
            </div>
            </div>
            
        );
    }

}

export default MovieDetails