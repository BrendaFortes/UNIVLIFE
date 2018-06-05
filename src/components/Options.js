import React from 'react';
import Option from './Option';

const Options = (props) => {
  return(
    <div>
      <p>{props.options.length}</p>
      {
        props.options.map((option) => <Option
                                        key={option}
                                        textOption={option}
                                        handleDeleteOption = {props.handleDeleteOption}
                                        />)
      }
      <p></p>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
};

export default Options;
