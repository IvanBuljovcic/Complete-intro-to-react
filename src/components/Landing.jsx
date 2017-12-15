/* @flow */
import React from 'react';

const Landing = (props: { people: Person }) => (
  <div className="landing">
    <div className="landing__aside">
      <h1>Aside</h1>
    </div>

    <div className="landing__main">
      <h1>
        <pre><code>{JSON.stringify(props.people, null, 4)}</code></pre>
      </h1>
    </div>
  </div>
);

export default Landing;
