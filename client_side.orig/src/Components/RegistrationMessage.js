import React from 'react';
import css from './RegistrationMessage.module.css'

function RegistrationMessage(props) {
  return <div className={css.shadow} style={props.style}>{props.message}</div>;
}

export default RegistrationMessage;
