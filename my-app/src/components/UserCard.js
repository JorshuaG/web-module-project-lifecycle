import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserCard extends Component {
  render() {
    return (
      <div className="userCard">
        <h2>{this.props.userData.name}</h2>
        <h3>{this.props.userData.login}</h3>
        <img src={this.props.userData.avatar_url} />
        <Link to="/">
          <button>Back to Search</button>
        </Link>
        <div>
          <h3>Followers</h3>
          {this.props.followersData.map((follower) => (
            <div className="followerCard">
              <img src={follower.avatar_url} width={200} />
              <p>{follower.login}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserCard;
