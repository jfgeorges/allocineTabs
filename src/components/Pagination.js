import React from "react";

class Pagination extends React.Component {
  renderPageSelector = () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return pages.map((page, i) => {
      let className = "pageNumber";
      if (this.props.currentPage === page) {
        className = className + " currentPage";
      }
      return (
        <div key={i} className={className} pagenumber={page} onClick={() => this.props.loadmovies(this.props.currentTab, page)}>
          {page}
        </div>
      );
    });
  };

  render() {
    return <div className="pagination">{this.renderPageSelector()}</div>;
  }
}

export default Pagination;
