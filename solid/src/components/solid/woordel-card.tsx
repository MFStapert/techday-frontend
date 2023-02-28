import styles from './card.module.css';

export function WoordelCard() {
  return (
    <div>
      <div id="woordelcard"
           class={styles.card}>
        <h2>Welkom bij Woordel️ </h2>
        <lit-puzzle/>
      </div>
    </div>
  );
}


