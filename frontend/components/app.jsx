import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = (props) => (
  <main>
    <h1>BenchBnB</h1>
    <GreetingContainer />
    { props.children }
  </main>
);

export default App;
