import React, { useEffect, useState } from 'react';
import './Gym.css'

const Gym = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, [])
    return (
        <div className='gym-container'>
            <div className="exercises-container">
                <h3>Select Todays exercises : {exercises.length}</h3>

            </div>
            <div className="profile-container">
                <h4>Zahid Hasan</h4>

            </div>

        </div>
    );
};

export default Gym;