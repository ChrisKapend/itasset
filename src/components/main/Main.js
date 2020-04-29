import React from 'react';
import './Main.css';
import {data} from '../functions/data'
import Report from "../objects/Report";

function Main() {
    return (
        <section className={'mainZone col-sm-12 MainZone row'}>
            {
                data.map((report, i) =>{
                    return(
                        <Report title = {report}/>
                    )
                })
            }
        </section>
    );
}

export default Main;