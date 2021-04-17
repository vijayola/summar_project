import React from 'react';
import {useHistory} from 'react-router-dom';

function Participate(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            Participate page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default Participate;