import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { name, Time, description, img } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>{description}</p>
            <h4>Time: {Time} </h4>


        </div>
    );
};

export default Exercise;