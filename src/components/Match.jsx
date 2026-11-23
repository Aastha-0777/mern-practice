import React from 'react'

export const Match = () => {

    const year = 2026;
    const currYear = 2026;
    const score = 670;

  return (
    <div style={{textAlign : "center", backgroundColor : score < 500 && "red"}}>
        <h1>Match</h1>
        <h2>Match Year : {year} <span>{year === currYear ? "Current Year" : ""}</span></h2>
        <h2 style={{color : year === currYear ? "green" : "red"}}>Match Year : {year} <span>{year === currYear && "Current Year"}</span></h2>
        <h2 style={{color : score >= 500 ? "blue" : "pink"}}>Score : {score}</h2>
    </div>
  )
}
