import React, { useState } from 'react';

const State = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount);
    }
   
    return (
        <div>
            <h2>This is my smart Watch</h2>
            <h3>My Current Steps: {steps} </h3>
            <button onClick={increaseSteps}>Run start....</button>
        </div>
    );
};

export default State;