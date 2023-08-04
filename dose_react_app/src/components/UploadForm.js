import React from 'react';

export function UploadForm(props) {

    return (
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
    )
}