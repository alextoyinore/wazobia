import React from 'react'
import { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function loadUsers() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();
            setUsers(data);
        }  
        
        loadUsers();
    }, []);

    // async function loadUsers() {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const data = await response.json();
    //     setUsers(data);
    // }  

  return (
    <div>
        <h2>Users List</h2>
        {users ? (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        ) : (
            <p>Loading users...</p>
        )}

        {/* <button onClick={loadUsers}>Load Users</button> */}
    </div>
  )
}

export default Users

