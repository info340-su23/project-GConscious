import React, { useState } from 'react';

import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxRow } from './SectionPillboxContent.js';
import { UploadForm } from './UploadForm.js';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { add } from 'lodash';

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

const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };

function App() {
  // const [prescriptions, setPrescriptions] = useState(SAMPLE_DATA);
  // const handleAddPrescription = (newPrescription) => {
  //   setPrescriptions([...prescriptions, newPrescription]);
  // };
  const [prescriptions, setPrescriptions] = useState(weeklyPills);
  const [userData, setUserData] = useState([]);


  const handleClick = (event) => {
    event.preventDefault();
    console.log("you Clicked ME");
    const addNewPillTest = {
      pillName: "test2",
      days: ["saturday"],
      dose: 3,
      quantity: 40,
      refills: 3,
      description: "For headaches, fevers, inflammation, hangovers",
      symptoms: "feel better i guess?"
    }
    const newUserData = [...userData, addNewPillTest];
    setUserData(newUserData);
    const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };
    newUserData.forEach(pillObj => {
      pillObj.days.forEach(day => {
        weeklyPills[day].push(pillObj)
      });
    });
    console.log(weeklyPills);
    setPrescriptions(weeklyPills);
  }



  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="pillbox" element={<PillboxRow weeklyPills={prescriptions} />} />
            {/* <Route path="upload" element={<UploadForm addPrescription={handleAddPrescription} />} /> */}
            <Route path="upload" element={<UploadForm handleClick={handleClick} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
