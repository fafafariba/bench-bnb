import React from 'react';
import { Link, hashHistory } from 'react-router';



const Greeting = (props) => {
  let greeting_content = (
     <section>
      <Link to="/signup">Sign Up</Link>
      <br/>
      <Link to="/login">Login</Link>
    </section>
  );

  const logoutHandler = e => {
    e.preventDefault();
    props.logout();
    hashHistory.push("/");
  };

  if (props.currentUser) {
    greeting_content = (
      <section>
        <h2>Welcome {props.currentUser.username}</h2>
        <button onClick={ logoutHandler }></button>
      </section>
    );
  }
  return (
    <section>
      { greeting_content }
    </section>
  );
};

export default Greeting;
