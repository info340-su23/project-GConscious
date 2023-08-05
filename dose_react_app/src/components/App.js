import React from 'react';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxContent } from './SectionPillboxContent.js';
import { UploadForm } from './UploadForm.js';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";


const SAMPLE_DATA =
{
  pillName: "Advil",
  days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
  dose: 3,
  quantity: 40,
  refills: 3,
  description: "For headaches, fevers, inflammation, hangovers",
  symptoms: "feel better i guess?"
}

const SECOND_SAMPLE_DATA =
  [
    {
      pillName: "Advil",
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      dose: 3,
      quantity: 40,
      refills: 3,
      description: "For headaches, fevers, inflammation, hangovers",
      symptoms: "feel better i guess?"
    },

    {
      pillName: "Advil",
      days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      dose: 3,
      quantity: 40,
      refills: 3,
      description: "For headaches, fevers, inflammation, hangovers",
      symptoms: "feel better i guess?"
    }
  ]
console.log(SAMPLE_DATA);

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Routes>

            <Route path="pillbox" element={<PillboxContent sampleData={SAMPLE_DATA} />} />
            <Route path="upload" element={<UploadForm />} />

          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
