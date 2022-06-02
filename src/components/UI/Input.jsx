import React from 'react';
import styles from './Input.module.css';

export default function Input(props) {
  return (
    <input value={props.value} className={`${styles.input} ${props.styles}`} type={props.type} onChange={props.onChange} />
  )
}
