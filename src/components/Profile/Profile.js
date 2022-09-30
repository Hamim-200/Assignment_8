import React from 'react';

const Profile = ({ profile }) => {
    return (
        <div>
            <h4>Zahid Hasan</h4>
            <p>Today's Exercise: {profile.length}</p>


        </div>
    );
};

export default Profile;