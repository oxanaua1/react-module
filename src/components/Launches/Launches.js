import {useEffect, useState} from "react";

import Launch from "../Launch/Launch";


const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => {
                let launches = (value.filter(value => value.launch_year !== '2020'))
                setLaunches(launches)
            });


    }, []);
    return (
        <div>

            {launches.map(launches => <Launch
                key={launches.flight_number}
                mission_name={launches.mission_name}
                launch_year={launches.launch_year}
                mission_patch_small={launches.links.mission_patch_small}


            />)}


        </div>


    );


};

export default Launches;


















