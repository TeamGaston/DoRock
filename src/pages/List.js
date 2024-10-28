import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.email}</td>
            <td>{userData.name}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'you@gmail.com' , name: '유재석'},
        {email: 'kim@gmail.com' , name: '김종국'},
        {email: 'haha@gmail.com' , name: '하하'},
        {email: 'song@gmail.com' , name: '송지효'},
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;