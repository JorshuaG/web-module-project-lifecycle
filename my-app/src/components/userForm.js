import React, { Component } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

class UserForm extends Component {
  state = {
    usernamesearch: "",
    userData: [],
  };
  handleSearch = (evt) => {
    evt.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.usernamesearch}`)
      .then((res) => {
        this.setState({ ...this.state, userData: res.data });
        console.log("response data", res.data);
        this.props.userFormCallback(res.data);
        this.props.history.push("/usercard");
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
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Enter your Username"
            onChange={this.handleChange}
          ></input>

          <button type="submit">Find User</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
