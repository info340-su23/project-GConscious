import React from 'react';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxRow } from './SectionPillboxContent.js';
import { UploadForm } from './UploadForm.js';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";


// const SAMPLE_DATA =
// {
//   pillName: "Advil",
//   days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
//   dose: 3,
//   quantity: 40,
//   refills: 3,
//   description: "For headaches, fevers, inflammation, hangovers",
//   symptoms: "feel better i guess?"
// }

const SAMPLE_DATA =
  [
    {
      pillName: "Advil",
      days: ["monday", "tuesday", "wednesday"],
      dose: 3,
      quantity: 40,
      refills: 3,
      description: "For headaches, fevers, inflammation, hangovers",
      symptoms: "feel better i guess?"
    },

    {
      pillName: "Chillpill",
      days: ["monday", "tuesday", "wednesday"],
      dose: 3,
      quantity: 40,
      refills: 3,
      description: "For headaches, fevers, inflammation, hangovers",
      symptoms: "feel better i guess?"
    },
    {
      pillName: "hangover pill",
      days: ["friday"],
      dose: 3,
      quantity: 40,
      refills: 3,
      description: "For headaches, fevers, inflammation, hangovers",
      symptoms: "feel better i guess?"
    }
  ]

// USE STATE PSEUDO CODE
// const [userData, setUserdata] = useState(SAMPLE_DATA);

// const handleClick = (event) (

//   setUserData(formUploadObj) 
// )



const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };

SAMPLE_DATA.forEach(pillObj => {
  pillObj.days.forEach(day => {
    weeklyPills[day].push(pillObj)
  })
})
console.log(weeklyPills);

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="pillbox" element={<PillboxRow weeklyPills={weeklyPills} />} />
            <Route path="upload" element={<UploadForm />} />

          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
