const Commit = (props) => {
    const {id, name, email, body} = props;

    return (
        <div>
            <div>
                <h3>{id}-Name:{name} </h3>
                <p>User email: {email} - {body}</p>
            </div>

        </div>

    )

}


export default Commit;