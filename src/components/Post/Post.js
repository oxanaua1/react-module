const Post = (props) => {
    const {id, title, body} = props;

    return (
        <div>
            <div>
                <h3>{id} - {title}</h3>
                <p> {body}</p>
            </div>
        </div>
    )

}

export default Post;