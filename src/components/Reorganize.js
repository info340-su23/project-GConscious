import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Reorganize(props) {
    // Grab passd down current Prescriptions and list them out for user
    let userPrescription = props.userPrescription;
    console.log(userPrescription);
    const navigate = useNavigate();


    // Have user select which pill to adjust days
    const [isChecked, setIsChecked] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    });

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        const switchCheck = { [name]: !(isChecked[name]) }
        setIsChecked({ ...isChecked, ...switchCheck });
    }

    // Re-assign/replace days with user's chosen days

    const handleSubmit = (event) => {
        event.preventDefault();

        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        const daysArray = [];
        const selectedDays = days.forEach(day => {
            if (event.target[day].checked === true) {
                daysArray.push(event.target[day].value);
            }
        })
        console.log(daysArray);
        console.log(userPrescription);

        const newPrescription = userPrescription.map(pillObj => {
            console.log(pillObj);
            pillObj.days = daysArray;
            return (
                pillObj
            )
        })
        console.log(newPrescription);
        props.handleSetUserPrescriptions(newPrescription);
        console.log(props.organizedPillbox)
        const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };
        newPrescription.forEach(pillObj => {
            pillObj.days.forEach(day => {
                weeklyPills[day].push(pillObj)
            });
        });
        props.handleSetOrganizedPillbox(weeklyPills);
        event.target.reset();
        navigate('/mypillbox');

    }



    return (
        <div>
            <h1>Select the pill you'd like to reorganize:</h1>
            <PrescriptionList userPrescription={userPrescription} handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />
            <form onSubmit={handleSubmit}>
                <Checkboxes isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
                <button className="btn btn-primary">Reorganize</button>
            </form>
        </div>
    )
}

function Checkboxes(props) {
    const isChecked = props.isChecked;
    const handleCheckboxChange = props.handleCheckboxChange;
    const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const checks = daysOfTheWeek.map(day => {
        return (
            <div key={day} className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={day}
                    value={day}
                    checked={isChecked[day]}
                    onChange={handleCheckboxChange}
                    id="days"
                />
                <label htmlFor={day} className="form-check-label" >
                    {day}
                </label>
            </div>
        )

    })

    return (
        <>
            <div>
                {checks}
            </div>
        </>
    )
}



function PrescriptionList(props) {

    const userPrescription = props.userPrescription;

    const prescripElementsArray = userPrescription.map(prescription => {
        return (

            <div key={prescription.pillName}>
                <p>{prescription.pillName}</p>
            </div>
        )
    })

    return (
        <div>
            {prescripElementsArray}
        </div>
    )
}