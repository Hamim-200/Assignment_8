import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
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
                    <p className='btn-text'>Add to list</p>
                    <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>
                </button>
            </div>


        </div>
    );
};

export default Exercise;