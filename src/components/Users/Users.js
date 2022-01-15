import React, {useEffect, useState} from 'react';
import './UsersStyles.css'


import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails"
import {userService} from "../../services/users.service";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {

        userService.getAll().then(value => {
            setUsers(value);


        });

    }, []);

    const getUserId = (id) => {
        userService.getById(id).then(value => {
            setUser(value);


        });


    }

    return (
        <div className={'Wrapper'}>
            <div>
                {users.map(value =>
                    <User
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        getUserId={getUserId}
                    />
                )}
            </div>

            <div>{

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

