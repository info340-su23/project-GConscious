import React, { useState } from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxRow } from './SectionPillboxContent.js';
import { UploadForm } from './UploadForm.js';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { add } from 'lodash';
import { useNavigate } from 'react-router-dom';

// const SAMPLE_DATA =
//   [
//     {
//       pillName: "Advil",
//       days: ["monday", "tuesday", "wednesday"],
//       dose: 3,
//       quantity: 40,
//       refills: 3,
//       description: "For headaches, fevers, inflammation, hangovers",
//       symptoms: "feel better i guess?"
//     },

//     {
//       pillName: "Chillpill",
//       days: ["monday", "tuesday", "wednesday"],
//       dose: 3,
//       quantity: 40,
//       refills: 3,
//       description: "For headaches, fevers, inflammation, hangovers",
//       symptoms: "feel better i guess?"
//     },
//     {
//       pillName: "hangover pill",
//       days: ["friday"],
//       dose: 3,
//       quantity: 40,
//       refills: 3,
//       description: "For headaches, fevers, inflammation, hangovers",
//       symptoms: "feel better i guess?"
//     }
//   ];

const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };

function App() {
  const [prescriptions, setPrescriptions] = useState(weeklyPills);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  


  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("you Clicked ME");
    //console.log(event.target.pillName);
    // const addNewPillTest = {
    //   pillName: "test3",
    //   days: ["saturday"],
    //   dose: 3,
    //   quantity: 40,
    //   refills: 3,
    //   description: "For headaches, fevers, inflammation, hangovers",
    //   symptoms: "feel better i guess?"
    // }


    // Grab Form Values and create new prescription
    const pillName = event.target.pillName.value;
    const dose = Number(event.target.dose.value);
    const quantity = Number(event.target.quantity.value);
    const refills = Number(event.target.refills.value);
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const description = event.target.description.value;
    const symptoms = event.target.symptoms.value;
    const newPrescription = { pillName: pillName, dose: dose, quantity: quantity, refills: refills, days: days, description: description, symptoms: symptoms };
    
    // Add on to current userData and setUser data
    const newUserData = [...userData, newPrescription];
    setUserData(newUserData);

    //Create new weekly prescriptions with current userData pills. Set the new prescription. 
    const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };
    newUserData.forEach(pillObj => {
      pillObj.days.forEach(day => {
        weeklyPills[day].push(pillObj)
      });
    });

    setPrescriptions(weeklyPills);
    event.target.reset();
    navigate('pillbox');
    
  }

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="pillbox" element={<PillboxRow weeklyPills={prescriptions} />} />
            <Route path="upload" element={<UploadForm handleSubmit={handleSubmit} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
