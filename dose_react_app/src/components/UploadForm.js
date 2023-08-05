import React, { useState } from 'react';

export function UploadForm(props) {
    const [newPrescription, setNewPrescription] = useState({
        pillName: "",
        dose: "",
        quantity: "",
        refills: "",
        days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    });
    const handleInput = (event) => {
        const { name, value } = event.target;
        setNewPrescription({ ...newPrescription, [name]: value });
    };
    const handleClick = (event) => {
        event.preventDefault();
        props.addPrescription(newPrescription);
        setNewPrescription({
            pillName: "",
            dose: "",
            quantity: "",
            refills: "",
            days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        });
    };
    
    
    /*return (
        <form>
            <div className="form-group upload-fields">
                <label htmlFor="medName" className="col-sm-2 col-form-label">Medicine Name </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="medName" placeholder="Ex. Acetaminophen" />
                </div>
            </div>

            <div className="form-group upload-fields">
                <label htmlFor="qty" className="col-sm-2 col-form-label">Quantity </label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="qty" />
                </div>
            </div>

            <div className="form-group upload-fields ">
                <label htmlFor="dosage" className="col-sm-2 col-form-label">Dosage </label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="dosage" />
                </div>
            </div>

            <div className="form-group upload-fields">
                <label htmlFor="refills" className="col-sm-2 col-form-label">Refills </label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="refills" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="doc" className="col-sm-2 col-form-label">Doctor </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="doc" placeholder="Dr. Harry Larry" />
                </div>
            </div>

            <div>
                <button type="submit" className="btn btn-primary upload-btn">Submit</button>
            </div>
        </form>
    )*/
    return (
        <form>
            <div className="form-group upload-fields">
                <label htmlFor="medName" className="col-sm-2 col-form-label">Medicine Name </label>
                    <input type="text"
                        className="form-control"
                        name="pillName"
                        value={newPrescription.pillName}
                        onChange={handleInput}
                        placeholder="Ex. Acetaminophen"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Dose</label>
                <input
                    type="text"
                    className="form-control"
                    name="dose"
                    value={newPrescription.dose}
                    onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    value={newPrescription.quantity}
                    onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Refills</label>
                <input
                    type="text"
                    className="form-control"
                    name="refills"
                    value={newPrescription.refills}
                    onChange={handleInput}/>
            </div>
            <div>
                <button type="button" className="btn btn-primary upload-btn" onClick={handleClick}>Submit</button>
            </div>
        </form>
    ); 
}