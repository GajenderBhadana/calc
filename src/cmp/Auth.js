import React, { Component } from "react";

export default class Auth extends Component {
  login = () => {
    console.warn("state", this.state);
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        Accept: "applcation/json",
        "content-Type": "applcation/json",
      },
      body: JSON.stringify(this.state),
    }).then(result => {
      result.json().then(resp => {
        console.log(resp);
        localStorage.setItem("auth", JSON.stringify(resp.success.token));
      });
    });
    // alert("Login Called");
  };
  render() {
    return (
      <div>
        <div>
          <input
            type='text'
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type='text'
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <br />
          <button onClick={() => this.login()}>Login</button>
        </div>
      </div>
    );
  }
}
