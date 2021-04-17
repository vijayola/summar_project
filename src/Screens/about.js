import React from 'react';
import {useHistory} from 'react-router-dom';

function About(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            About page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default About;