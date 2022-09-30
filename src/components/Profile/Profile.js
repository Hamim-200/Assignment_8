import React from 'react';
import './Profile.css'
import image1 from './../../images/img1jpg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faWeightScale, faClock } from '@fortawesome/free-solid-svg-icons';

const Profile = (props) => {
    const { profile } = props;

    let total = 0;
    for (const exercise of profile) {
        total = total + exercise.Time;
    }


    return (
        <div className='profile'>
            <div className='person-info'>
                <img src={image1} alt="" srcset="" />
                <div>
                    <h3>Zahid Hasan</h3>
                    <p >Sydney, Australia</p>
                </div>
            </div>
            <div className='bio'>
                <p> <FontAwesomeIcon icon={faWeightScale} ></FontAwesomeIcon>Weight: 75 kg</p>
                <p> <FontAwesomeIcon icon={faArrowUp} ></FontAwesomeIcon>Height:6.5</p>
                <p> <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon>Age:25</p>
            </div>
            <div className='btn'>
                <button>10S</button>
                <button>20S</button>
                <button>30S</button>
                <button>40S</button>
            </div>

            <h3>Exercise Details</h3>
            <h4>Seleted Exercise : {profile.length}</h4>
            <h3>Exercise Time: {total}S</h3>
            <h3>Break Time:{ }</h3>
        </div>
    );
};

export default Profile;