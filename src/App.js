import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import TabPopular from "./components/TabPopular";
import TabUpcoming from "./components/TabUpcoming";
import TabTopRated from "./components/TabTopRated";

class App extends Component {
  state = {
    currentTab: "Popular Movies"
  };

  renderButtons = () => {
    const tabs = ["Popular Movies", "Upcoming Movies", "Top Rated Movies"];
    return tabs.map((tab, i) => {
      return <Button key={i} tabName={tab} currentTab={this.state.currentTab} handleButtonClick={this.handleButtonClick} />;
    });
  };
  handleButtonClick = tabName => {
    this.setState({ currentTab: tabName });
  };

  renderTab = () => {
    switch (this.state.currentTab) {
      case "Popular Movies":
        return <TabPopular pagenumber={this.state.pageNumber} />;
      case "Upcoming Movies":
        return <TabUpcoming pagenumber={this.state.pageNumber} />;
      default:
        return <TabTopRated pagenumber={this.state.pageNumber} />;
    }
  };
  handlePageNumberClick = pageNumber => {
    this.setState({ pageNumber: pageNumber });
  };
  render() {
    return (
      <div className="container">
        <header>ALLOCINE</header>
        {this.renderButtons()}
        {this.renderTab()}
      </div>
    );
  }
}

export default App;
