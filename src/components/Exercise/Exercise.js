import React, { useEffect, useState } from 'react';
import './Exercise.css'

const Exercise = () => {

    const [exercise, setExercise] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, []);
    return (
        <div className='exercise-container'>
            <div className='exercise-type'>
                <h3>Select Today's Exercise : {exercise.length}</h3>
            </div>

            <div className='exercise-profile'>
                <h4>Zahid Hasan</h4>

            </div>

        </div>
    );
};

export default Exercise;