import React from "react";

export const Content = () => {
  var year = 2026;
  var country = "India";
  var isActive = true;
  var user = {
    id: 67,
    userName: "Vasudev",
  };
  // var x = null;

  return (
    <div>
      <h1>Hello This is From React</h1>
      <h2>Year : {year}</h2>
      <h2>Country : {country}</h2>
      <h2>IsActive ?? {isActive ? "Active" : "Not Active"}</h2>
      {/* <h2>User : {user}</h2> --> this gives an error that object is not a node child*/}
      <h2>User Id : {user.id}</h2>
      <h2>User Name : {user.userName}</h2>
      {/* <h2>Null : {x}</h2> --> this will not show null*/}
    </div>
  );
};
