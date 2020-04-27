import React from 'react';

function Dropmenu() {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Computers
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Add computer</a>
                    <a className="dropdown-item" href="#">List computers</a>
                    <a className="dropdown-item" href="#">Assign computer</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Telephone
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Add Telephone</a>
                    <a className="dropdown-item" href="#">List Telephones</a>
                    <a className="dropdown-item" href="#">Assign Telephones</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Computers
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Add computer</a>
                    <a className="dropdown-item" href="#">List computer</a>
                    <a className="dropdown-item" href="#">Assign computer</a>
                </div>
            </li>
        </ul>
    );
}

export default Dropmenu;