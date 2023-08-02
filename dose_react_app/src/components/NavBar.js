import React from 'react';

export function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg py-0">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Dose</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a aria-label="My Pillbox Page" class="nav-link" href="index.html">My Pillbox</a>
                        </li>
                        <li class="nav-item">
                            <a aria-label="Search Page" class="nav-link" href="Static_MockUp/Search.html">Search</a>
                        </li>
                        <li class="nav-item">
                            <a aria-label="Upload Meds Page" class="nav-link" href="Static_MockUp/Upload.html">Upload Meds</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}