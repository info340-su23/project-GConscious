import React from 'react';

export function Reorganize(props) {
    // Grab passd down current Prescriptions and list them out for user

    // Have user select which pill to adjust days

    // Grab pillobj[days] in the following format: const newPrescription = {pillName: pillName, dose: dose, quantity: quantity}


    // Re-assign/replace days with user's chosen days

    // setUserPrescription with modified pill
    // props.handleSetUserPrescriptions(newUserPrescription);

    return(
        <>
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