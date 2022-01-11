const User = (props) => {
    const {id, name, username, email} = props;

    return (
        <div>
            <div><h3>{id}-Name:{name} </h3>
                <p>User name: {username} - email: {email}</p>
            </div>

        </div>

    )

}


export default User;