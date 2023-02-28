import { Component } from 'solid-js';
import styles from './card.module.css';

export const Card: Component<{titel: string, text: string, children: any}> = (props) => {
  return (
    <div>
      <div class={styles.card}>
        <h2>{props.titel}</h2>
        <p>{props.text}</p>

        {props.children}
      </div>
    </div>
  );
}


