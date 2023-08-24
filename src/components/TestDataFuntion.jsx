import React, { useState } from 'react'
import DataList from './DataList'

const TestDataFuntion = (props) => {
    const [users, setUsers] = useState([
        {
            id: "1",
            name: "Gtan",
            age: 12
        },
        {
            id: "2",
            name: "Jado",
            age: 20
        },
    ])
    return (
        <div>
            <DataList users={users} />
        </div>
    )
}

export default TestDataFuntion
