import { createSignal, Match, Switch } from 'solid-js';
import { NewsletterComponent } from '../../lit/components/newsletter-component';
import { VideoComponent } from '../../lit/components/video-component';
import { Card } from './components/card';
import { RenderCycleCard } from './components/renderCycleCard';
import { backgroundColours } from './components/variables';
import { WoordelCard } from './components/woordel-card';
import logo from './logo.svg';
import styles from './App.module.scss';
import { LitPuzzle } from '../../lit/components/lit-puzzle';


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
        </div>
        <div class={styles.content}
             style={{ 'background-color': bgColour() }}>
          <Switch>
            <Match when={showContent() == SelectedContent.MAIN}
                   keyed={false}>
              <Card titel="FE Techday Demo App"
                    text="Applicatie om wat gevoel te krijgen voor Solid en Lit">

                <div style={{ display: 'flex', 'justify-content': 'center', width: '100%', 'margin-top': '2rem' }}>
                  <button onClick={() => pickRandomBackgroundColour()}
                          style={{ 'color': '#ffffff', 'background-color': bgColour() }}>
                    Andere achtergrond
                  </button>
                </div>
              </Card>
              <RenderCycleCard/>
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
          {showContent() == SelectedContent.MAIN && <newsletter-component subject={'SolidJS'}/>}
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
