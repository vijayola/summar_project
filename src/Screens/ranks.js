import React from 'react';
import {useHistory} from 'react-router-dom';

function Ranks(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            Ranks page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default Ranks;