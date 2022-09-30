import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Question 1: How Does React Work ?</h2>
            <p>ANS: React make a copy of our Actula DOM.When state or component change, React goes through its virtual DOM, creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p>

            <br />
            <h2>Question 2: What is the difference between Props and State ?</h2>
            <p>ANS: 1. Props is used for passed data from one component to another, State Data is passed within the component only. <br />
                2. Propos is Immutable ( cannot be modified ) , State is Mutable ( can be modified ). <br />
                3. Props can be used with state and functional components, State can be used only with the state components/class component. <br />
                4. Props are read-only , State is both read and write.
            </p>
            <br />
            <h2>Question 3: What is the use of useEffect ?</h2>
            <p>
                ANS: <br />
                1. Running once on mount: fetch API data <br />
                2. Running on state change: validating input field <br />
                3. Running on state change: live filtering <br />
                4. Running on state change: trigger animation on new array value <br />
                5. Running on props change: update paragraph list on fetched API data update <br />
                6. Running on props change: updating fetched API data to get BTC updated price etc. <br />
            </p>

        </div>
    );
};

export default Blog;