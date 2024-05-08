import React, { useState } from "react";

const PureCounter = () => {

    const [state, setstate] = useState({
        count:0,
        toggle:false
    })

    const handleToggel=()=>{
        
        setstate({
            ...state,
            toggle:state.toggle?false:true
        })
    }

    const handleInc=()=>{
    state.toggle? setstate({...state,count:state.count+1}):setstate({...state,count:state.count})
    }


  return (
    <div>
      <h1>Pure Counter</h1>
      <h1>{state.count}</h1>
      <button onClick={handleToggel}>Set toggel</button>
      <button onClick={handleInc}>increase</button>
    </div>
  );
};

export default PureCounter;
