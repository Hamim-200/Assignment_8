import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'

const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))

    }, [])

    const handleAddToCart = (exercise) => {
        console.log(exercise)
        const newProfile = [...profile, exercise]
        setProfile(newProfile);
    }
    return (
        <div className='gym-container'>
            <div className="exercises-container">

                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToCart={handleAddToCart}

                    ></Exercise>)

                }

            </div>
            <div className="profile-container">
                <h4>Zahid Hasan</h4>
                <p>Today's Exercise: {profile.length}</p>

            </div>

        </div>
    );
};

export default Gym;