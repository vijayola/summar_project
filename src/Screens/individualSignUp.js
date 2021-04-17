import React, { useState, useEffect } from 'react';
import '../css/landingPage.css';
import '../css/indlogin.css';
import '../css/signup.css';


function IndividualSignup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [users, setusers] = useState("");
    const [id, setid] = useState(0);

    
    function handleFormSubmit() {
        setid(users[users.length - 1].id+1);
        if(name !== "" && email !== "" && username !== "" && password !== ""){
            const requestOptions = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: id, name: name, email: email,username: username, password: password})
            };
            fetch('https://localhost:3000/Users', requestOptions)
            .then(resp => resp.json())
            .then(data => {console.log(data);});
        }
    }


    useEffect(() => {
        fetch("http://localhost:3000/Users")
            .then(response => {
                response.json()
                .then(res => {
                    setusers(res);
                })
            })
    }, [id]);
    
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
            <div className="signup-body">
                <div className="login-card">
                    <form onSubmit={handleFormSubmit}>
                        <label className="label-for-login">Sign up to Family</label>
                        <br />
                        <label>
                            <input className="input-for-login" autoComplete="on" type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="Name" />
                        </label>
                        <br />
                        <label>
                            <input className="input-for-login" autoComplete="on" type="text" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Email" />
                        </label>
                        <br /><label>
                            <input className="input-for-login" autoComplete="on" type="text" value={username} onChange={(e) => { setusername(e.target.value) }} placeholder="Username" />
                        </label>
                        <br />
                        <label>
                            <input className="input-for-login" autoComplete="on" type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Password" />
                        </label>
                        <br />
                        <button className="submit-button-for-login" type="button" onClick={handleFormSubmit}>Sign-Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default IndividualSignup;