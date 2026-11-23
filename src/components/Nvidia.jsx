import React from 'react'

export const Nvidia = () => {

    const user = {
        name : 'Jensen',
        age : 67,
        isActive : false
    };

  return (
    <div style={{textAlign : "center"}}>

        <h1>Nvidia</h1>

        <h2>Name : {user.name}</h2>
        <h2>Age : {user.age} <span>{user.age > 60 && "S.R. Citizen"}</span></h2>
        <h2 style={{color : user.isActive ? "green" : "red"}}>IsActive : {user.isActive ? "Active" : "Not Active"}</h2>

    </div>
  )
}
