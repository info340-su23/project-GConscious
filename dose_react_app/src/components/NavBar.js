import React from 'react';
import { NavLink } from 'react-router-dom';


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
                {/* <NavLink to='/pillbox'>My Pillbox</NavLink> */}
                {/* <NavLink to='/upload'>upload</NavLink> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* 
                    <NavLink to='/pillbox'>My Pillbox</NavLink>
                    <NavLink to='/upload'>upload</NavLink> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink aria-label="My Pillbox Page" className="nav-link" to="/pillbox">My Pillbox</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink aria-label="Search Page" className="nav-link" to="">Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink aria-label="Upload Meds Page" className="nav-link" to="/upload">Upload Meds</NavLink>                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}