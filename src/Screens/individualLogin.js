import React, {useState, useEffect} from 'react';
import '../css/landingPage.css';
import '../css/indlogin.css';
import {useHistory} from 'react-router-dom';


function IndividualLogin() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [users, setusrs] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:3000/Users")
        .then(response => {response.json()
            .then(res => {
                setusrs(res);
            })
        })
    }, []);

    function handleFormSubmit(){
        users.map((user, i) =>{
            if(user.username === username && user.password === password){
                history.push({
                    pathname:"/individual-profile",
                    state: {user}
                });
            }
            return <div key="i"></div>
        }
        );
    };

    

    return (
        <div>
            <header className="LandingPage-header">
                <div className="links-from-home">
                    <a className="link-from-home" href="/" >Family</a>
                    <a className="link-from-home" href="/about">About</a>
                    <a className="link-from-home" href="/individual-login">Login</a>
                    <a className="link-from-home" href="/individual-signup">Sign up</a>
                </div>
            </header>
            <div className="login-body">
                <div className="login-card">
                    <form onSubmit={handleFormSubmit}>
                        <label className="label-for-login">Login to Family</label>
                        <br/>
                        <label>
                            <input className="input-for-login" autoComplete="on" type="text" value={username} onChange={(e) => {setusername(e.target.value)}} placeholder="Username"/>
                        </label>
                        <br/>
                        <label>
                            <input className="input-for-login" autoComplete="on" type="password" value={password} onChange={(e) => {setpassword(e.target.value)}} placeholder="Password"/>
                        </label>
                        <br/>
                        <button className="submit-button-for-login" type="submit" onClick={handleFormSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default IndividualLogin;