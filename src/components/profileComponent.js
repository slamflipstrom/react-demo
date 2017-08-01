import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

const Query = gql`
  query {
    viewer {
      name
      email
      company
    }
  }
`;

const ProfileComponentWithData = graphql(Query)(ProfileComponent);

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
