import React from 'react';

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg py-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="">Dose</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a aria-label="My Pillbox Page" className="nav-link" href="">My Pillbox</a>
                        </li>
                        <li className="nav-item">
                            <a aria-label="Search Page" className="nav-link" href="">Search</a>
                        </li>
                        <li className="nav-item">
                            <a aria-label="Upload Meds Page" className="nav-link" href="">Upload Meds</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}