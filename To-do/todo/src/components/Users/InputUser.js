import React, { useState } from "react";
import "./InputUser.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const InputUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName.length === 0 || userAge.length === 0) {
      setError({
        title: "Invalid Input",
        message: "please enter valid name and age",
      });
      return;
    }
    if (userAge < 0) {
      setError({
        title: "Invalid Age",
        message: "please enter the age > 0",
      });
      return;
    }
    props.onAdduser(userName, userAge); //coming from app.js

    setUserName(""); //for resetting value to none after form submission
    setUserAge("");
  };

  const modalCloseHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={modalCloseHandler}
        />
      )}
      <Card className="hello">
        <div className="form-box">
          <h1>Simple Form</h1>

          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                id="name"
                type="text"
                name="Name"
                onChange={userNameHandler}
                value={userName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                className="form-control"
                id="age"
                type="number"
                name="Age"
                onChange={userAgeHandler}
                value={userAge}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default InputUser;
