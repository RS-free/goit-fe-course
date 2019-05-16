import React from 'react';

const Controls = ({ onPrev, onNext }) => (
  <div>
    <button className="button" onClick={onPrev}>
      Prev
    </button>
    <button className="button" onClick={onNext}>
      Next
    </button>
  </div>
);

export default Controls;
