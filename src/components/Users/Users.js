import React, {useEffect, useState} from 'react';


import User from "../User/User";
import UserDetails from "../User/UserDetails"


const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);


            });

    }, []);

    const getUserId = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser(value);

            });


    }

    return (
        <div className={'Wrapper'}>
            <div className={'UsersAll'}>
                {users.map(value =>
                    <User
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        getUserId={getUserId}
                    />
                )}
            </div>

            <div className={'UserDetails'}>{

                user &&
                <div>
                    <UserDetails

                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        street={user.address.street}
                        suite={user.address.suite}
                        city={user.address.city}
                        zipcode={user.address.zipcode}
                        lat={user.address.geo.lat}
                        lng={user.address.geo.lng}
                        phone={user.phone}
                        website={user.website}
                        companyName={user.company.name}
                        catchPhrase={user.company.catchPhrase}
                        bs={user.company.name}


                    />
                </div>
            }</div>


        </div>
    );
};

export default Users;

