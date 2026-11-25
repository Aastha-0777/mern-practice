import React from 'react'

export const MapDemo1 = () => {

    const names = ['Aasha', 'Aastha', 'Mrugana', 'Aarav', 'Pranvi', 'Vasudev', 'Radha']

  return (
    <div>
        <h1>MapDemo1</h1>

        {/* {names} */}
        {
            names.map((n) => {
                return <li><h5>{n}</h5></li>
            })
        }

    </div>
  )
}
