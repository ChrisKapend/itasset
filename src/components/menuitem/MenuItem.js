import React from 'react';
import MenuSubItem from "../menusubitem/MenuSubItem";
import './MenuItem.css';

function MenuItem({item}) {
    const {title, subItem} = item;
    return (
        <li className="nav-item dropdown col-sm">
            <a className="nav-link " href="#" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <MenuSubItem dropDownItem = {subItem}/>
            </div>
        </li>
    );
}

export default MenuItem;