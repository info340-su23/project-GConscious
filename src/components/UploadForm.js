import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export function UploadForm(props) {

    const [isChecked, setIsChecked] = useState({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false });
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        const switchCheck = { [name]: !(isChecked[name]) }
        setIsChecked({ ...isChecked, ...switchCheck });
    }


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
        const newUserPrescription = [...props.userPrescription, newPrescription];
        // setUserPrescription(newUserPrescription);
        props.handleSetUserPrescriptions(newUserPrescription);

        //Create new weekly prescriptions with current userData pills. Set the new prescription. 
        const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };
        newUserPrescription.forEach(pillObj => {
            pillObj.days.forEach(day => {
                weeklyPills[day].push(pillObj)
            });
        });

        props.handleSetOrganizedPillbox(weeklyPills);
        event.target.reset();
        navigate('/');

    }

    // Get drug name from url parameter 
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const fillDrugName = urlParams.get('drug');
    const side_effects = urlParams.get('side_effects');

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group upload-fields">
                    <label htmlFor="pillName" className="col-sm-2 col-form-label">Medicine Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="pillName"
                        id="pillName"
                        placeholder="Ex. Acetaminophen" 
                        value={fillDrugName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dose" className="form-label">Dose</label>
                    <input
                        type="text"
                        className="form-control"
                        name="dose"
                        id="dose"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input
                        type="text"
                        className="form-control"
                        name="quantity"
                        id="quantity"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="refills" className="form-label">Refills</label>
                    <input
                        type="text"
                        className="form-control"
                        name="refills"
                        id="refills"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        id="description"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="symptoms" className="form-label">Side Effects</label>
                    <input
                        type="text"
                        className="form-control"
                        name="symptoms"
                        id="symptoms"
                    />
                </div>
                <div className="mb-3">
                    <div>
                        <label htmlFor="days" className="form-label">Days </label>
                    </div>
                    <Checkboxes isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

function Checkboxes(props) {
    const isChecked = props.isChecked;
    const handleCheckboxChange = props.handleCheckboxChange;
    const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const checks = daysOfTheWeek.map(day => {
        return (
            <div className="form-check form-check-inline">
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