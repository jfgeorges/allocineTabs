import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

class Tab extends React.Component {
  state = {
    movies: [],
    pageNumber: 1
  };
  componentDidMount = () => {
    this.loadMovies(this.props.currentTab, this.state.pageNumber);
  };

  loadMovies = async (currentTab, page) => {
    let url = "";
    switch (currentTab) {
      case "Popular Movies":
        url = "https://api-allocine.herokuapp.com/api/movies/popular?p=" + page;
        break;
      case "Upcoming Movies":
        url = "https://api-allocine.herokuapp.com/api/movies/upcoming?p=" + page;
        break;
      default:
        url = "https://api-allocine.herokuapp.com/api/movies/top_rated?p=" + page;
    }
    const response = await fetch(url);
    const movies = await response.json();
    this.setState({ movies: movies.results, pageNumber: page });
  };

  renderMovies = () => {
    // this.loadMovies(this.props.currentTab, this.state.pageNumber); // => provoque un appel boucle du RENDER puisque l'on remet à jour le state à chaque appel
    if (this.state.movies.length > 0) {
      return this.state.movies.map(movie => {
        return <Card key={movie.id} movie={movie} />;
      });
    } else {
      return <div className="loading">Loading {this.props.currentTab}...</div>;
    }
  };

  render() {
    console.log("RENDER TAB ", this.props.currentTab);
    return (
      <>
        <div className="movies">{this.renderMovies()}</div>
        <Pagination currentTab={this.props.currentTab} currentPage={this.state.pageNumber} loadmovies={this.loadMovies} />
      </>
    );
  }
}

export default Tab;
