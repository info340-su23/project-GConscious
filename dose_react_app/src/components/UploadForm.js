import React, { useState } from 'react';


export function UploadForm(props) {
    const [newPrescription, setNewPrescription] = useState({
        pillName: "",
        dose: "",
        quantity: "",
        refills: "",
        description: "",
        symptoms: "",
        days: {monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false,},
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setNewPrescription((previousPrescription) => ({...previousPrescription,
            days: {
                ...previousPrescription.days,
                [name]: checked,
            },
        }));
    };

    
    // const handleClick = (event) => {
    //     event.preventDefault();
    //     props.addPrescription(newPrescription);
    //     setNewPrescription({
    //         pillName: "",
    //         dose: "",
    //         quantity: "",
    //         refills: "",
    //         description: "",
    //         symptoms: "",
    //         //days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    //     });
    // };

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group upload-fields">
                    <label htmlFor="medName" className="col-sm-2 col-form-label">Medicine Name </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="pillName"
                        placeholder="Ex. Acetaminophen" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dose</label>
                    <input
                        type="text"
                        className="form-control"
                        name="dose"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                        type="text"
                        className="form-control"
                        name="quantity"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Refills</label>
                    <input
                        type="text"
                        className="form-control"
                        name="refills"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Symptoms</label>
                    <input
                        type="text"
                        className="form-control"
                        name="symptoms"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Days</label>
                    <div>
                        {Object.keys(newPrescription.days).map((day) => (
                        <div key={day} className="form-check form-check-inline">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            name={day}
                            checked={newPrescription.days[day]}
                            onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor={day}>
                                {day}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}