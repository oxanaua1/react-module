import {useEffect, useState} from "react";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users => users.json())
            .then(users =>
                setUsers(users)
            )


    }, []);

    return (
        <div>
            {users.map(users => <User
                key={users.id}
                id={users.id}
                name={users.name}
                username={users.username}
                email={users.email}
            />)}
        </div>
    )
}

export default Users;