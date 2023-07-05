import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CountUp } from '../src/index';

const Count = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div style={{ marginTop: '120vh' }}>
      <span>
        <CountUp
          start={0}
          end={12}
          duration={100}
          decimalPlaces={0}
          isCounting={isPlaying}
          // updateInterval={1}
          // onUpdate={(value) => console.log(value)}
        >
          {({ value }) => value}
        </CountUp>
      </span>
      <br />
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        Toggle Playing
      </button>
    </div>
  );
};

ReactDOM.render(<Count />, document.querySelector('#root'));
