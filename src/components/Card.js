import React from "react";

class Card extends React.Component {
  render() {
    let truncateOverview = this.props.movie.overview;
    if (truncateOverview.length >= 450) {
      truncateOverview = truncateOverview.substring(0, 447) + "...";
    }
    const imagePath = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.props.movie.backdrop_path;
    return (
      <div className="card">
        <img src={imagePath} alt="Movie Poster" />
        <div className="title">{this.props.movie.title}</div>
        <div className="releaseDate">{this.props.movie.release_date}</div>
        <div className="overview">{truncateOverview}</div>
      </div>
    );
  }
}

export default Card;
