import React from 'react';
import Search from '../search/Search';
import MenuItem from "../menuitem/MenuItem";
import './Navigation.css';
import {data} from '../functions/data';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id={'navigation '}>
            <a className="navbar-brand" href="#">IT Asset</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto row">
                    {data.map((item, i) =>{
                        return(<MenuItem key={i} item = {item}/>)
                    })}
                </ul>
                <Search />
            </div>
        </nav>
    );
}

export default Navigation;
