import { createSignal, Match, Switch } from 'solid-js';
import { LitPuzzle } from './components/lit/lit-puzzle';
import { NewsletterComponent } from './components/lit/newsletter-component';
import { VideoComponent } from './components/lit/video-component';
import { Card } from './components/solid/card';
import { backgroundColours } from './components/solid/variables';
import { WoordelCard } from './components/solid/woordel-card';

import logo from './logo.svg';
import styles from './App.module.css';


enum SelectedContent {
  MAIN,
  WOORDEL,
  VIDEO
}


function App() {

  const [showContent, setShowContent] = createSignal(SelectedContent.MAIN);
  const [bgColour, setBgColour] = createSignal('#34568B');

  function pickRandomBackgroundColour() {
    const newColour = backgroundColours[Math.floor(Math.random() * backgroundColours.length)];
    setBgColour(newColour);
  }

  return (
    <div class={styles.App}>
      <img src={logo}
           class={styles.logo}
           alt="logo"/>
      <div class={styles.main}>
        <div class={styles.sidebar}>
          <button onClick={() => setShowContent(SelectedContent.MAIN)}>Hoofdpagina</button>
          <button onClick={() => setShowContent(SelectedContent.WOORDEL)}>Speel Woordel</button>
          <button onClick={() => setShowContent(SelectedContent.VIDEO)}>Bonuspagina</button>
        </div>
        <div class={styles.content}
             style={{ 'background-color': bgColour() }}>
          <Switch>
            <Match when={showContent() == SelectedContent.MAIN}
                   keyed={false}>
              <Card titel="Solid speeltuin"
                    text="Demo applicatie om wat gevoel te krijgen voor Solid en Lit">

                <div style={{ display: 'flex', 'justify-content': 'center', width: '100%', 'margin-top': '2rem' }}>
                  <button onClick={() => pickRandomBackgroundColour()}
                          style={{ 'color': '#ffffff', 'background-color': bgColour() }}>
                    Andere achtergrond
                  </button>
                </div>
              </Card>
            </Match>
            <Match when={showContent() == SelectedContent.WOORDEL}
                   keyed={false}>
              <WoordelCard/>
            </Match>
            <Match when={showContent() == SelectedContent.VIDEO}
                   keyed={false}>
              <video-component/>
            </Match>
          </Switch>
          {showContent() == SelectedContent.MAIN && <newsletter-component/>}
        </div>
      </div>
    </div>
  );
}

export default App;

// Register any Lit elements with the browser.
customElements.define('lit-puzzle', LitPuzzle);
customElements.define('video-component', VideoComponent);
customElements.define('newsletter-component', NewsletterComponent);
