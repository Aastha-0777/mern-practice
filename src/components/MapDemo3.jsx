import React from 'react'

export const MapDemo3 = () => {
  
    const employees = [
  { "id": 1, "name": "Aarav", "age": 29, "salary": 65000 },
  { "id": 2, "name": "Priya", "age": 34, "salary": 82000 },
  { "id": 3, "name": "Liam", "age": 26, "salary": 54000 },
  { "id": 4, "name": "Mei", "age": 31, "salary": 78000 },
  { "id": 5, "name": "Carlos", "age": 42, "salary": 95000 },
  { "id": 6, "name": "Sofia", "age": 28, "salary": 61000 },
  { "id": 7, "name": "Noah", "age": 37, "salary": 88000 },
  { "id": 8, "name": "Ananya", "age": 25, "salary": 52000 },
  { "id": 9, "name": "Ethan", "age": 39, "salary": 91000 },
  { "id": 10, "name": "Zara", "age": 32, "salary": 74000 }
]


    return (
    <div> 
        
        <h1>MapDemo3</h1>
        <br />
        <table className='table table-bordered table-striped table-hover table-responsive'>

            <thead>
             <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>SALARY</th>
             </tr>
        </thead>
        <tbody>
    
            {
                employees.map((emp) => {

                    return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td>{emp.salary}</td>
                    </tr>
                })
            }

        </tbody>
        </table>
        
    </div >

)
}
