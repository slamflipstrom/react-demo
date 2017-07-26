import React, { Component } from "react";

class ProfileComponent extends Component {
  render() {
    return (
      <div className="Profile">
        <h2>
          Name: {this.props.name}
        </h2>
      </div>
    );
  }
}

export default ProfileComponent;
