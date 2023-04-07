import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import assets from '../DB/assets.json';

function Intro() {
  const [password, setPassword] = useState();
  const handleSubmit = () => {
    if (password === '0701') {
      localStorage.setItem('status', 'loggedIn');
    }
  };

  return (
    <div className="intro-page">
      <div className="intro-container">
        <Link to={`${process.env.PUBLIC_URL}/video`} className="br-logo">
          <img src={`${process.env.PUBLIC_URL + assets.icons[0].logo}`} alt="logo" />
        </Link>
        <p className="br-title body-large">
          B|R GROUP
        </p>
        <form className="br-admin">
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="login"
            type="submit"
            onClick={handleSubmit}
          >
            <Link to={process.env.PUBLIC_URL}>
              Enter
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Intro;
