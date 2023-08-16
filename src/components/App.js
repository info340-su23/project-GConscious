import React, { useState } from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxRow } from './SectionPillboxContent.js';
import { UploadForm } from './UploadForm.js';
import { Search } from './Search.js';
import { Route, Routes } from "react-router-dom";
//import { add } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';

const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };

function App({ drugsList }) {
  //Organized pillbox with pills on specific days based on user prescription.
  //const [organizedPillbox, setOrganizedPillbox] = useState({ monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] });
  //User's pool of prescribed pills. Each with description, side effects, which days to take, dosage, etc.
  const [prescriptions, setPrescriptions] = useState(weeklyPills);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  // const handleSetUserPrescriptions = (newUserPrescription) => {
  //   setUserPrescription(newUserPrescription);
  // }

  // const handleSetOrganizedPillbox = (weeklyPills) => {
  //   setOrganizedPillbox(weeklyPills);
  // }
  const handleSubmit = (event) => {
    event.preventDefault();

    // Grab Form Values and create new prescription
    const pillName = event.target.pillName.value;
    const dose = Number(event.target.dose.value);
    const quantity = Number(event.target.quantity.value);
    const refills = Number(event.target.refills.value);
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const daysArray = [];
    days.forEach(day => {
      if (event.target[day].checked === true) {
        daysArray.push(event.target[day].value);
      }
    })
    const description = event.target.description.value;
    const symptoms = event.target.symptoms.value;
    const newPrescription = { pillName: pillName, dose: dose, quantity: quantity, refills: refills, days: daysArray, description: description, symptoms: symptoms };

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

    addNotification({
      title: 'Success',
      subtitle: 'Added ' + pillName,
      theme: 'light',
      backgroundTop:'lightgreen',
      backgroundBottom: 'green',
      closeButton:'X',
      message: 'Your Pillbox has been updated.',
      duration: 4000,
    });

    // navigate('/');

  }

  const handleRemove = (event) => {
    const pillName = event.target.name;
    const day = event.target.value;

    //filter pills with that day. 
    console.log(prescriptions);

    const newPrescription = prescriptions[day].filter(pillObj => {
      return pillObj.pillName != pillName;
    })
    // create new list of pills for specific day
    const dayPills = {};
    dayPills[day] = newPrescription;

    //create new weekly prescription and set state
    const newWeekPrescriptions = { ...prescriptions, ...dayPills }
    setPrescriptions(newWeekPrescriptions);
  };


  return (
    <div>
      <Notifications position='top-right' />
      <Header />
      <main>
        <div className="container">
          <Routes>
            {/* <Route index element={<PillboxRow organizedPillbox={organizedPillbox} handleSetOrganizedPillbox={handleSetOrganizedPillbox} />} />
            <Route path="upload" element={<UploadForm handleSetOrganizedPillbox={handleSetOrganizedPillbox} handleSetUserPrescriptions={handleSetUserPrescriptions} userPrescription={userPrescription} organizedPillbox={organizedPillbox} />} /> */}
            <Route index element={<PillboxRow weeklyPills={prescriptions} handleRemove={handleRemove} />} />
            <Route path="upload" element={<UploadForm handleSubmit={handleSubmit} />} />
            <Route path="search" element={<Search drugsList={drugsList} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
