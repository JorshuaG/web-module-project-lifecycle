import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import { Switch, Link, Route } from "react-router-dom";
import UserForm from "./components/userForm";

class App extends React.Component {
  state = {
    userDataFromChild: [],
  };

  userFormCallback = (userFormData) => {
    this.setState({ userDataFromChild: userFormData });
  };

  // handleSearch = (evt) => {
  //   evt.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users/${this.state.usernamesearch}`)
  //     .then((res) => {
  //       this.setState({ ...this.state, userData: res.data });
  //       console.log("response data", res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("after axios pull, state", this.state);
  // };

  render() {
    return (
      <div>
        <h1>GitHub User</h1>
        <p>{this.state.userDataFromChild.name}</p>
        <Switch>
          <Route exact path="/">
            <UserForm userFormCallback={this.userFormCallback} />
          </Route>
          <Route path="/usercard">
            <UserCard userData={this.state.userDataFromChild} />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
