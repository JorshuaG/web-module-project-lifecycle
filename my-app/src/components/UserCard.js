import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserCard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.userData.name}</h2>
        <h3>{this.props.userData.login}</h3>
        <img src={this.props.userData.avatar_url} />
        <Link to="/">
          <button>Back to Search</button>
        </Link>
      </div>
    );
  }
}

export default UserCard;
