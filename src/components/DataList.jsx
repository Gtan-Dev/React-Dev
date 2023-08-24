import React from 'react'

const DataList = (props) => {
    const users = props.users
  return (
    <div>
      {users.map(user =>
                <div>
                    <div key={user.id}>
                        {user.age}
                        {user.name}
                    </div>
                </div>
            )}
    </div>
  )
}

export default DataList
