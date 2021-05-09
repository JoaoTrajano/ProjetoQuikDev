import React, { Component } from 'react';
import Filter from './filter'
import Movies from './movie'
import axios from 'axios';

class ApiMovie extends Component {

    constructor(props) {
        super();
        this.state = {
            movie: [],
            genres: [],
            valueFilter: ''
        }
    }

    componentDidMount = () => {
        this.getMovies()
        this.getGenres()

    }

    componentDidUpdate() {

        if (this.state.valueFilter.indexOf(' ') >= 0) {
            this.setState({ valueFilter: this.state.valueFilter.replace(' ', '+') });
        }

        if (this.state.valueFilter.length > 0) {

            const request = axios.get("http://127.0.0.1:8000/api/movies/" + this.state.valueFilter)
            request.then((resp) => {
                this.setState({ movie: resp.data.results });

                let args = Array.prototype.slice.call(resp.data.results);
                args = [].slice.call(resp.data.results);
                args = Array.from(resp.data.results);

                args.sort(function (a, b) {
                    return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
                });

                this.setState({ movie: args });
            })

        }

        if (!this.state.flag) {
            this.state.flag = false
        }
    }

    getMovies = () => {
        axios.get("http://127.0.0.1:8000/api/movies").then((resp) => {

            let args = Array.prototype.slice.call(resp.data.results);
            args = [].slice.call(resp.data.results);
            args = Array.from(resp.data.results);

            args.sort(function (a, b) {
                return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
            });

            this.setState({ movie: args });

        })
    }

    getGenres = () => {
        const request = axios.get("http://127.0.0.1:8000/api/movies/genre")
        request.then((respGenres) => {
            this.setState({ genres: respGenres.data.genres });
        })
    }

    mountArrayGenres = () => {
        let arrayGenres = []
        this.state.genres.forEach(element => {
            arrayGenres[element.id] = element.name
        });

        return arrayGenres
    }

    filterGenreTitle = (event) => {

        this.setState({ valueFilter: event.target.value });

        if (this.state.valueFilter.indexOf(' ') >= 0) {
            this.setState({ valueFilter: this.state.valueFilter.replace(' ', '+') });
        }

    }

    render() {

        const arrayGenres = this.mountArrayGenres()

        return (
            <div>
                <Filter filterGenreTitle={this.filterGenreTitle} />
                {
                    this.state.movie.map((data) => {
                        return <div className="div-movies">
                            {
                                <Movies
                                    nameMovie={data.title}
                                    trocar={this.trocar}
                                    poster={data.poster_path}
                                    nameAlt={data.title}
                                    dateRelease={data.release_date}
                                    genres={data.genre_ids}
                                    genresArray={arrayGenres}
                                    resumo={data.overview}
                                    id={data.id}
                                />
                            }
                            
                        </div>
                    })
                }
            </div>
        );
    }

}

export default ApiMovie;