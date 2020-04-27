import React from 'react';

function MenuItem(props) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.title}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {props.subMenu.map(element => {{<a className="dropdown-item" href="#">element</a>}})}
            </div>
        </li>
    );
}

export default MenuItem;