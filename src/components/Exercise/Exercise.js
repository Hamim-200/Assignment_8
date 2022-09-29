import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { name, Time, description, img } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <p>Name: {name}</p>
                <p>{description}</p>
                <p><h4>Time: {Time}</h4> </p>
            </div>
            <div>
                <button className='btn-cart'>
                    <h5>Add to list</h5>
                </button>
            </div>


        </div>
    );
};

export default Exercise;