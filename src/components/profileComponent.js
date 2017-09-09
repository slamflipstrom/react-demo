import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

class ProfileComponent extends Component {
  render() {
    return (
      <div className="Profile">
        <h2>Name: {this.orgQuery}</h2>
      </div>
    );
  }
}

const Query = gql`
  query OrgInfo {
    organization(login: "Meteor") {
      id
      name
      url
    }
  }
`;

const ProfileComponentWithData = graphql(Query, { name: "orgQuery" })(ProfileComponent);

export default ProfileComponentWithData;
