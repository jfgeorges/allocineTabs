import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

class TabTopRated extends React.Component {
  state = {
    movies: []
  };
  componentDidMount = () => {
    this.loadMovies(1);
  };

  loadMovies = async page => {
    const response = await fetch("https://api-allocine.herokuapp.com/api/movies/top_rated?p=" + page);
    const popularMovies = await response.json();
    this.setState({ movies: popularMovies.results });
  };

  renderMovies = () => {
    if (this.state.movies.length > 0) {
      return this.state.movies.map(movie => {
        return <Card key={movie.id} movie={movie} />;
      });
    } else {
      return <div className="loading">Charging Top Rated Movies...</div>;
    }
  };

  render() {
    return (
      <>
        <div className="movies">{this.renderMovies()}</div>
        <Pagination loadmovies={this.loadMovies} />
      </>
    );
  }
}

export default TabTopRated;
