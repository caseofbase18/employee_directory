import React from 'react';

function Table(props) {
    return (
        <div class="container fluid">
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Pic</th>
                        <th scope="col">Title</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Work Phone</th>
                    </tr>

                </thead>
                <tbody>
                    {props.users[0] &&
                        props.users.map(user => {
                            return (
                                <tr>
                                    <td><img src={user.picture.thumbnail} alt=""></img></td>
                                    <td>{user.name.title}</td>
                                    <td>{user.name.first}</td>
                                    <td>{user.name.last}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;