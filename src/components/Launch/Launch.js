const Launch = (props) => {

    const {mission_name, launch_year, mission_patch_small} = props;

    return (
        <div className={'Wrapper'}>
            <h3>Mission Name: {mission_name}, Launch Year: {launch_year}</h3>
            <img className={'Img'} src={mission_patch_small} alt="mission_name"/>


        </div>


    );

};

export default Launch;