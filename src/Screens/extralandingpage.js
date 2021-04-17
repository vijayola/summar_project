import React from 'react';
import {useHistory} from 'react-router-dom';

function ExtraLandingPage(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            ExtraLandingPage page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default ExtraLandingPage;