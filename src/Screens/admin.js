import React from 'react';
import {useHistory} from 'react-router-dom';

function Admin(){
    const history = useHistory();
    function rd(){
        history.push("/");
    }
    return(
        <div>
            Admin page
            <button onClick={rd}>home</button>
        </div>
    );
}

export default Admin;