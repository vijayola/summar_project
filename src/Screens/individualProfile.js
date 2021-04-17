import React, { useState, useEffect } from 'react';


function IndividualProfile(event) {
    const [user, setuser] = useState(null);
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        setuser(event.location.state);
        setloaded(true);
    }, [event.location.state]);

    return (
        <div >
            {
                (() =>{
                    if(loaded){
                        return<div>{user.user.name}{user.user.email}</div>
                    }else{
                        return<div>loading...</div>
                    }
                })()
            }
        </div>
    );
    
}

export default IndividualProfile;