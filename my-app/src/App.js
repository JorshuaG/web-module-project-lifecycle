import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import { Switch, Link, Route } from "react-router-dom";
import UserForm from "./components/userForm";

class App extends React.Component {
  state = {
    userDataFromChild: [],
    userFollowersData: [],
  };

  userFormCallback = (userFormData) => {
    this.setState({ ...this.state, userDataFromChild: userFormData });
  };
  userFormFollowersCallback = (userFormFollowers) => {
    this.setState({ ...this.state, userFollowersData: userFormFollowers });
  };

  render() {
    return (
      <div>
        <h1>GitHub User</h1>
        <Switch>
          <Route exact path="/">
            <UserForm
              userFormCallback={this.userFormCallback}
              userFormFollowersCallback={this.userFormFollowersCallback}
            />
          </Route>
          <Route path={`/${this.state.userDataFromChild.login}`}>
            <UserCard
              userData={this.state.userDataFromChild}
              followersData={this.state.userFollowersData}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
