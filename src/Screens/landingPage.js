import React from 'react';
import {useHistory} from 'react-router-dom';

function LandingPage(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            LandingPage page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default LandingPage;