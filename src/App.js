import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tab from "./components/Tab";

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

  render() {
    return (
      <div className="container">
        <header>ALLOCINE</header>
        {this.renderButtons()}
        <Tab key={this.state.currentTab} currentTab={this.state.currentTab} />
      </div>
    );
  }
}

export default App;
