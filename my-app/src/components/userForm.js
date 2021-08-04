import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const FormStyles = styled.div`
  .formContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
class UserForm extends Component {
  state = {
    usernamesearch: "",
    userData: [],
    userFollowers: [],
  };
  handleSearch = (evt) => {
    evt.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.usernamesearch}`)
      .then((res) => {
        this.setState({ ...this.state, userData: res.data });
        console.log("response data", res.data);
        this.props.userFormCallback(res.data);
        this.props.history.push({ pathname: this.state.userData.login });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://api.github.com/users/${this.state.usernamesearch}/followers`
      )
      .then((res) => {
        this.setState({ ...this.state, userFollowers: res.data });
        this.props.userFormFollowersCallback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (evt) => {
    this.setState({ ...this.state, usernamesearch: evt.target.value });
  };
  render() {
    return (
      <FormStyles>
        <div className="formContainer">
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              placeholder="Enter your Username"
              onChange={this.handleChange}
            ></input>

            <button type="submit">Find User</button>
          </form>
        </div>
      </FormStyles>
    );
  }
}

export default withRouter(UserForm);
