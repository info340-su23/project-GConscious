import React from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxContent } from './SectionPillboxContent.js'

function App() {
  return (
    <div>

      <Header />
      <PillboxContent 
        img="../img/days/monday.png"
        altText = "Image of dates in a week"
      />
      {/* <Main />  */}
      <Footer />

    </div>
  );
}

export default App;
