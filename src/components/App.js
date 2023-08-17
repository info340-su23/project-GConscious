import React, { useState } from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { PillboxRow } from './SectionPillboxContent.js';
import { UploadForm } from './UploadForm.js';
import { Reorganize } from './Reorganize.js';
import { Search } from './Search.js';
import { Route, Routes } from "react-router-dom";
import { Login } from './login.js';
//import { add } from 'lodash';
//import { useNavigate } from 'react-router-dom';

function App({ drugsList }) {
  //Organized pillbox with pills on specific days based on user prescription.
  const [currentUser, setCurrentUser] = useState('');
  const [organizedPillbox, setOrganizedPillbox] = useState({ monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] });
  //User's pool of prescribed pills. Each with description, side effects, which days to take, dosage, etc.
  const [userPrescription, setUserPrescription] = useState([]);

  const handleSetUserPrescriptions = (newUserPrescription) => {
    setUserPrescription(newUserPrescription);
  }

  const handleSetOrganizedPillbox = (weeklyPills) => {
    setOrganizedPillbox(weeklyPills);
  }

  const handleSetUser = (userName) => {
    setCurrentUser(userName);
  }

  console.log(currentUser);

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route index element={<PillboxRow organizedPillbox={organizedPillbox} handleSetOrganizedPillbox={handleSetOrganizedPillbox} currentUser={currentUser} />} />
            <Route path="upload" element={<UploadForm handleSetOrganizedPillbox={handleSetOrganizedPillbox} handleSetUserPrescriptions={handleSetUserPrescriptions} userPrescription={userPrescription} organizedPillbox={organizedPillbox} />} />
            <Route path="search" element={<Search drugsList={drugsList} />} />
            <Route path='login' element={<Login handleSetUser={handleSetUser} handleSetOrganizedPillbox={handleSetOrganizedPillbox} handleSetUserPrescriptions={handleSetUserPrescriptions} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;