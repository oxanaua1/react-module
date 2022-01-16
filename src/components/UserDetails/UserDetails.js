import './UserDetailsStyles.css'

const UserDetails = ({getUserPosts, id, name, username, email, street, suite, city, zipcode, lat, lng,
        phone, website, companyName, catchPhrase, bs }) => {


    return (
        <div className={'UserDetails'}>
            <div>
                <h2>{id}. {name}</h2>
                <h3>Username: {username}, email: {email}</h3>
                <div> Address:
                    <br/>street: {street};
                    <br/>suite: {suite};
                    <br/>city: {city};
                    <br/>zipcode: {zipcode}
                </div>
                <div> Address geo: lat: {lat}, lng: {lng}</div>
                <div> Telephone N:{phone}</div>
                <div> Website: {website}</div>
                <div> Company: {companyName}</div>
                <div>Company Catch Phrase: {catchPhrase}</div>
                <div>Company bs: {bs}</div>
                <button onClick={() => getUserPosts(id)}>Show user's posts</button>


            </div>

        </div>
    );
};

export default UserDetails;
