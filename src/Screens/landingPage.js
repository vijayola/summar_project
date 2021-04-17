import React from 'react';
import '../css/landingPage.css';



function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <div className="links-from-home">
          <a className="link-from-home" href="/" >Family</a>
          <a className="link-from-home" href="/about">About</a>
          <a className="link-from-home" href="/individual-login">Login</a>
          <a className="link-from-home" href="/individual-signup">Sign up</a>
        </div>
      </header>
      <div className="LandingPage-body">
        body
      </div>
    </div>
  );
}

export default LandingPage;


