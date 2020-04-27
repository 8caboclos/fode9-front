import React from 'react';
import {
    Link, NavLink, useLocation 
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default function Paginator(){
    let location = useLocation().pathname;
    const page = location.replace('/', '');
    console.log(page);
    
    const prev = Number(page) - 1;
    const next = Number(page) + 1;
 
    console.log('PREV: ' + prev + ' NEXT: ' + next );

    return(
        <div className="paginator-box">
            <Link className="page" to={"/"+prev}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Link>
            <NavLink className="page" activeClassName="activated" to="/1">
                1
            </NavLink>
            <NavLink className="page" activeClassName="activated" to="/2">
                2
            </NavLink>
            <NavLink className="page" activeClassName="activated" to="/3">
                3
            </NavLink>
            <Link className="page" to={"/"+next}>
                <FontAwesomeIcon icon={faAngleRight} />
            </Link>
        </div>
    )
}