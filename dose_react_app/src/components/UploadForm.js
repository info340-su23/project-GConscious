import React, { useState } from 'react';

export function UploadForm(props) {
    // const [newPrescription, setNewPrescription] = useState({
    //     pillName: "",
    //     dose: 0,
    //     quantity: 0,
    //     refills: 0,
    //     days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    // });
    // const handleInput = (event) => {
    //     const { name, value } = event.target;
    //     setNewPrescription({ ...newPrescription, [name]: value });
    // };
    // const handleClick = (event) => {
    //     event.preventDefault();
    //     props.addPrescription(newPrescription);
    //     setNewPrescription({
    //         pillName: "",
    //         dose: "",
    //         quantity: "",
    //         refills: "",
    //         days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    //     });
    // };

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group upload-fields">
                    <label htmlFor="medName" className="col-sm-2 col-form-label">Medicine Name </label>
                    <input type="text"
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
                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}