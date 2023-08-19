import React, { useState, useEffect } from 'react';

export function Reorganize(props) {
    // Grab passd down current Prescriptions and list them out for user
    let userPrescription = props.userPrescription;

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
        const newUserPrescription = { ...userPrescription, days: selectedDays };
        props.handleSetUserPrescriptions(newUserPrescription);
    }

    // setUserPrescription with modified pill
    //props.handleSetUserPrescriptions(newUserPrescription);

    return (
        <div>
        <PrescriptionList userPrescription={userPrescription} handleCheckboxChange={handleCheckboxChange} isChecked={isChecked}/>
        <form onSubmit={handleSubmit}>
            {/* <Checkboxes isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} /> */}
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
    const handleCheckboxChange = props.handleCheckboxChange;
    const isChecked = props.isChecked;

    const prescripElementsArray = userPrescription.map((prescription) => (
        <div key={prescription.pillName}>
            <h1>{prescription.pillName}</h1>
            <Checkboxes isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
        </div>
    ));

    return (
        <div>
            {prescripElementsArray}
        </div>
    );
};