import React, {useEffect, useState} from 'react';
import {locationService} from "../../services/location.service";
import Location from "../../components/Location/Location";

const LocationPage = () => {
    const [locations, setLocations] = useState([]);
useEffect(()=>{
    locationService.getAll().then(value => setLocations(value.results))


},[])
    return (
        <div>
            <h5>Location Page</h5>
            {locations.map(location=><Location key={location.id} location={location}/>)}
        </div>
    );
};

export {LocationPage};