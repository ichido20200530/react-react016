import React from 'react'

const ChildComp = props => (
  <div>
    <button onClick={() => props.changeValue(props.value + 1)}>+1</button>
  </div>
);

export default ChildComp;