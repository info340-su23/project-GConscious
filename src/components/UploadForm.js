import React, { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function UploadForm(props) {

    const [isChecked, setIsChecked] = useState({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const switchCheck = { [name]: !(isChecked[name]) }
        setIsChecked({ ...isChecked, ...switchCheck });
    }

    //Fill medicine name from search page. Retrieves drug name from url parameter 
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const fillDrugName = urlParams.get('drug');

    // useEffect(() => {
    //     const uploadForm = document.querySelector('.needs-validation');
    
    //     uploadForm.addEventListener('submit', function (event) {
    //         if (!uploadForm.checkValidity()) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //         }
    //         uploadForm.classList.add('was-validated');
    //     });
    // }, []);
    
    
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <div className="form-group upload-fields">
                    <label htmlFor="pillName" className="col-sm-2 col-form-label">Medicine Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="pillName"
                        id="pillName"
                        placeholder="Ex. Acetaminophen" 
                        value={fillDrugName}
                        required/>
                    {/* <div class="invalid-feedback">Please provide a name.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="dose" className="form-label">Dose</label>
                    <input
                        type="text"
                        className="form-control"
                        name="dose"
                        id="dose"
                        required
                    />
                    {/* <div class="invalid-feedback">Please provide a dosage.</div> */}

                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input
                        type="text"
                        className="form-control"
                        name="quantity"
                        id="quantity"
                        required
                    />
                    {/* <div class="invalid-feedback">Please provide a quantity.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="refills" className="form-label">Refills</label>
                    <input
                        type="text"
                        className="form-control"
                        name="refills"
                        id="refills"
                        required
                    />
                    {/* <div class="invalid-feedback">Please provide the amount of refills.</div> */}
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
                    <label htmlFor="symptoms" className="form-label">Symptoms</label>
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
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="monday"
                            value="monday"
                            checked={isChecked.monday}
                            onChange={handleCheckboxChange}
                            id="days"
                        />
                        <label htmlFor="monday" className="form-check-label" >
                            Monday
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="tuesday"
                            value="tuesday"
                            checked={isChecked.tuesday}
                            onChange={handleCheckboxChange}
                            id="days"
                        />
                        <label htmlFor="tuesday" className="form-check-label">
                            Tuesday
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="wednesday"
                            value="wednesday"
                            checked={isChecked.wednesday}
                            onChange={handleCheckboxChange}
                            id="days"
                        />
                        <label htmlFor="wednesday" className="form-check-label">
                            Wednesday
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="thursday"
                            value="thursday"
                            checked={isChecked.thursday}
                            onChange={handleCheckboxChange}
                            id="days"
                        />
                        <label htmlFor="thursday" className="form-check-label">
                            Thursday
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="friday"
                            value="friday"
                            checked={isChecked.friday}
                            onChange={handleCheckboxChange}
                            id="days"
                        />
                        <label htmlFor="friday" className="form-check-label">
                            Friday
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="saturday"
                            value="saturday"
                            checked={isChecked.saturday}
                            onChange={handleCheckboxChange}
                            id="days"
                        />
                        <label htmlFor="saturday" className="form-check-label">
                            Saturday
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="sunday"
                            value="sunday"
                            checked={isChecked.sunday}
                            onChange={handleCheckboxChange}
                            id="days"
                        />
                        <label htmlFor="sunday" className="form-check-label">
                            Sunday
                        </label>
                    </div>

                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}