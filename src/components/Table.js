import React from 'react';

function Table(props) {
    return (
        <tbody>
            {props.users[0] &&
                props.users.map(user => {
                    return(
                    <tr>
                        <td><img src= {user.picture.thumbnail}></img></td>
                        <td>{user.name.title}</td>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                    </tr>
                    
                    )
                })
            }
        </tbody>
    )
}

export default Table;