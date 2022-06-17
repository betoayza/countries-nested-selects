import React from 'react';
import './Message.css';

const Message = ({msg}) => {
  return (
    <>
        <div id="error-div">
           <h3>{msg}</h3>  
        </div>
    </>
  )
}

Message.defaultProps={
  msg: "An error happened!"
};

export default Message;