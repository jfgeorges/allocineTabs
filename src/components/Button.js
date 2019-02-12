import React from "react";

class Button extends React.Component {
  render() {
    let className = "";
    if (this.props.currentTab === this.props.tabName) {
      className = "underline";
    }
    return (
      <button
        className={className}
        value={this.props.tabName}
        onClick={() => {
          this.props.handleButtonClick(this.props.tabName);
        }}
      >
        {this.props.tabName}
      </button>
    );
  }
}

export default Button;
