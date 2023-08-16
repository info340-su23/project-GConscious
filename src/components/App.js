import React, { useEffect, useState } from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxRow } from './SectionPillboxContent.js';
import { UploadForm } from './UploadForm.js';
import { Search } from './Search.js';
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import SignInPage from './SignInPage.js';
//import { add } from 'lodash';
// import { useNavigate } from 'react-router-dom';

import DEFAULT_USERS from '../data/users.json';

function App({ drugsList }) {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[2]) //initially null;
  //Organized pillbox with pills on specific days based on user prescription.
  const [organizedPillbox, setOrganizedPillbox] = useState({
    monday: [{
      "pillName": "hangover pill",
      "dose": 3,
      "quantity": 40,
      "refills": 6,
      "days": [
        "thursday",
        "wednesday"
      ],
      "description": "for headaches",
      "symptoms": "none"
    }], tuesday: [{
      "pillName": "hangover pill",
      "dose": 3,
      "quantity": 40,
      "refills": 6,
      "days": [
        "thursday",
        "wednesday"
      ],
      "description": "for headaches",
      "symptoms": "none"
    }], wednesday: [], thursday: [], friday: [], saturday: [], sunday: []
  });

  //User's pool of prescribed pills. Each with description, side effects, which days to take, dosage, etc.
  const [userPrescription, setUserPrescription] = useState(currentUser.prescriptions);
  // console.log(userPrescription);

  const handleSetUserPrescriptions = (newUserPrescription) => {
    setUserPrescription(newUserPrescription);
  }

  const handleSetOrganizedPillbox = (weeklyPills) => {
    setOrganizedPillbox(weeklyPills);
  }

  const handleSetUser = (userName) => {
    setCurrentUser(userName);
  };
  console.log(currentUser);

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route index element={<SignInPage handleSetUser={handleSetUser} currentUser={currentUser} handleSetUserPrescriptions={handleSetUserPrescriptions} handleSetOrganizedPillbox={handleSetOrganizedPillbox} />} />
            <Route path="mypillbox" element={<PillboxRow currentUser={currentUser} organizedPillbox={organizedPillbox} handleSetOrganizedPillbox={handleSetOrganizedPillbox} />} />
            <Route path="upload" element={<UploadForm handleSetOrganizedPillbox={handleSetOrganizedPillbox} handleSetUserPrescriptions={handleSetUserPrescriptions} userPrescription={userPrescription} organizedPillbox={organizedPillbox} />} />
            <Route path="search" element={<Search drugsList={drugsList} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
