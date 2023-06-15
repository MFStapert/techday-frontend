import { Component, createSignal, onMount } from 'solid-js';
import { Card } from './card';

export const RenderCycleCard: Component = (_) => {

  let count = 0
  const [signalCount, setSignalCount] = createSignal(0);

  onMount(() => {
    setInterval(() => {
      count++;
      setSignalCount(signalCount() + 1);
    }, 1000);
  });

  // Deze functie wordt maar één keer uitgevoerd, omdat we Solid niet hebben gezegd dat deze property kan veranderen
  function getBrokenCount() {
    console.log('Broken counter: ', count);
    return <div>Deze counter is stuk: {count}</div>;
  }

  // Deze functie wordt opnieuw uitgevoerd zodra de Signal wordt geüpdate dmv setSignalCount
  function getSignalCount() {
    console.log('Signal counter: ', signalCount());
    return <div>Deze niet, want we gebruiken hier signals: {signalCount()}</div>;
  }

  // Als we toevallig een signal aanroepen in een functie, wordt de functie opnieuw uitgevoerd.
  // Daardoor zien we dus ook nieuwe values voor dingen die niet expliciet in een Signal zitten
  function getHackyCount() {
    // Hier doen we niets mee, maar de functie rendert nu wél opnieuw
    signalCount()
    console.log('Side effect counter: ', count);
    return <div>Deze counter doet het min of meer bij toeval: {count}</div>;
  }

  return (
    <Card titel="Render cycle"
          text="In Solid rendert alles wat geen Signal is maar één keer, voor de performance.">

      <div style={{ display: 'flex', 'justify-content': 'center', 'flex-direction': 'column', width: '100%', 'margin-top': '2rem' }}>
        {getBrokenCount()}

        {getSignalCount()}
        {getHackyCount()}
      </div>
    </Card>
  );
};


