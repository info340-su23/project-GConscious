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

    // Grab pillobj[days] in the following format: const newPrescription = {pillName: pillName, dose: dose, quantity: quantity}

    // Re-assign/replace days with user's chosen days

    const handleSubmit = (event) => {
        event.preventDefault();

        const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        const daysArray = [];
        days.forEach(day => {
            if (event.target[day].checked === true) {
                daysArray.push(event.target[day].value);
            }
        })


    }

    // setUserPrescription with modified pill
    props.handleSetUserPrescriptions(newUserPrescription);

    return (
        <>
            <Checkboxes isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
        </>
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
                <label htmlFor="monday" className="form-check-label" >
                    {day}
                </label>
            </div>
        )

    })

    return (
        <div>
            {checks}
        </div>
    )
}