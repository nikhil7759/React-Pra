import React from "react";
import "./UserList.css";

const UserList = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <h2>List of Users</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Age</div>
          </li>
          {props.users.map((user) => (
            <div key={user.id}>
              <li className="table-row">
                <div className="col col-1" data-label="Job Id">
                  {user.name}
                </div>
                <div className="col col-2" data-label="Customer Name">
                  {user.age}
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default UserList;
