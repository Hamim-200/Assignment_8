import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { name, Time, description, img } = props.exercise;
    const { handleAddToCart } = props;

    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <p>Name: {name}</p>
                <p>{description}</p>
                <h4>Time: {Time}</h4>
            </div>
            <div>
                <button onClick={() => handleAddToCart(props.exercise)} className='btn-cart'>
                    <p>Add to list</p>
                </button>
            </div>


        </div>
    );
};

export default Exercise;