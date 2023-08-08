import React, { useState } from 'react';


export function UploadForm(props) {
    const [newPrescription, setNewPrescription] = useState({
        // pillName: "",
        // dose: "",
        // quantity: "",
        // refills: "",
        // description: "",
        // symptoms: "",
        // days: { monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false, },
        // days: []
    });

    // const handleCheckboxChange = (event) => {
    // const { name, checked } = event.target;
    //     setNewPrescription((previousPrescription) => ({
    //         ...previousPrescription,
    //         days: {
    //             ...previousPrescription.days,
    //             [name]: checked,
    //         },
    //     }));
    //     console.log(name);
    // };


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
    const [isChecked, setIsChecked] = useState({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const switchCheck = { [name]: !(isChecked[name]) }
        // console.log(isChecked.monday)
        setIsChecked({ ...isChecked, ...switchCheck });
    }

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group upload-fields">
                    <label htmlFor="pillName" className="col-sm-2 col-form-label">Medicine Name </label>
                    <input
                        type="text"
                        className="form-control"
                        name="pillName"
                        id="pillName"
                        placeholder="Ex. Acetaminophen" />
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
                <div htmlFor="quantity" className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                        type="text"
                        className="form-control"
                        name="quantity"
                        id="quantity"
                    />
                </div>
                <div htmlFor="refills" className="mb-3">
                    <label className="form-label">Refills</label>
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
                <div htmlFor="symptoms" className="mb-3">
                    <label className="form-label">Symptoms</label>
                    <input
                        type="text"
                        className="form-control"
                        name="symptoms"
                        id="symptoms"
                    />
                </div>
                <div htmlFor="days" className="mb-3">
                    <div>
                        <label className="form-label">Days </label>
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
                        <label className="form-check-label" htmlFor="monday">
                            monday
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
                        <label className="form-check-label" htmlFor="tuesday">
                            tuesday
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
                        <label className="form-check-label" htmlFor="wednesday">
                            wednesday
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
                        <label className="form-check-label" htmlFor="thursday">
                            thursday
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
                        <label className="form-check-label" htmlFor="friday">
                            friday
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
                        <label className="form-check-label" htmlFor="saturday">
                            saturday
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
                        <label className="form-check-label" htmlFor="sunday">
                            sunday
                        </label>
                    </div>

                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}


// {Object.keys(newPrescription.days).map((day) => (
//     <div key={day} className="form-check form-check-inline">
//         <input
//             className="form-check-input"
//             type="checkbox"
//             name={day}
//             checked={newPrescription.days[day]}
//             onChange={handleCheckboxChange}
//         />
//         <label className="form-check-label" htmlFor={day}>
//             {day}
//         </label>
//     </div>
// ))}