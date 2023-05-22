import React from 'react'

export default function ArrayOfUsers(props) {
    return (
        <div>
            <h2>
                Array Of Users
            </h2>
            <ul>
                {props.users?.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>

        </div>
    )
}
