import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserCardStyles = styled.div`
  .followerCard {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    align-items: center;
    justify-content: space-evenly;
  }
  .userCard {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

class UserCard extends Component {
  render() {
    return (
      <UserCardStyles>
        <div>
          <Link to="/">
            <button>Back to Search</button>
          </Link>
          <div className="userCard">
            <h2>{this.props.userData.name}</h2>
            <h3>{this.props.userData.login}</h3>
            <img src={this.props.userData.avatar_url} />
          </div>
          <div>
            <h3>Followers:</h3>
            {this.props.followersData.map((follower) => (
              <div className="followerCard">
                <img src={follower.avatar_url} width={200} />
                <p>{follower.login}</p>
              </div>
            ))}
          </div>
        </div>
      </UserCardStyles>
    );
  }
}

export default UserCard;
