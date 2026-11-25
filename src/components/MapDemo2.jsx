import React from 'react'

export const MapDemo2 = () => {

    const users = [
  { "id": 1, "name": "Aarav", "role": "Admin" },
  { "id": 2, "name": "Priya", "role": "Editor" },
  { "id": 3, "name": "Liam", "role": "Viewer" },
  { "id": 4, "name": "Mei", "role": "Developer" },
  { "id": 5, "name": "Carlos", "role": "Editor" },
  { "id": 6, "name": "Sofia", "role": "Viewer" },
  { "id": 7, "name": "Noah", "role": "Developer" }
]

  return (
    <div>
        <h1>MapDemo2</h1>
        {
            users.map((u) => {
                return <li><h5>{u.id} {u.name} {u.role}</h5></li>
            })
        }
    </div>
  )
}
