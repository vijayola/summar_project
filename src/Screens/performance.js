import React from 'react';
import {useHistory} from 'react-router-dom';

function Performance(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            Performance page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default Performance;