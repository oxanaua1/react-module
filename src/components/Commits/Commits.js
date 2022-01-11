import {useEffect, useState} from "react";
import Commit from "../Commit/Commit";

const Commits = () => {

    const [commits, setCommit] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(commits => commits.json())
            .then(commits => {
                setCommit(commits);
            });
    }, []);
    return (
        <div>
            {commits.map(commits => <Commit
                key={commits.id}
                id={commits.id}
                name={commits.name}
                email={commits.email}
                body={commits.body}
            />)}
        </div>
    )
}

export default Commits;
