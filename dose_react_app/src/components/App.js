import React from 'react';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxContent } from './SectionPillboxContent.js'

const SAMPLE_DATA =
{
  pillName: "advil",
  days: ["monday", "tuesday", "wednesday"],
  dose: 3,
  quantity: 40,
  refills: 3,
  description: "For headaches, fevers, inflammation, hangovers",
  symptoms: "feel better i guess?"
}
console.log(SAMPLE_DATA);

function App() {
  return (
    <div>

      <Header />
      <main>
        <div className="container">
          <PillboxContent sampleData={SAMPLE_DATA} />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
