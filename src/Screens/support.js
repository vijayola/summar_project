import React from 'react';
import {useHistory} from 'react-router-dom';

function Support(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            Support page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default Support;