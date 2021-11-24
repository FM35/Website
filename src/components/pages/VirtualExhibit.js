import React from "react";
import './VirtualExhibit.css';
import { Link } from 'react-router-dom';
import Navbar from '../Nav_helper';

export default function VirtualExhibit() {

    return (

        <div className='exhibit-container'>
            <Navbar />
            <div style={{ color: "white" }} className='heading'> Virtual Exhibit</div>
            <div className='mobilePC'>
                <p className='question'> Are you on a mobile device or computer?</p>
                <Link to='/VEC' className='mobilePCButton'>
                    Computer
                </Link>
                <Link to='/VEM' className='mobilePCButton'>
                    Mobile
                </Link>
            </div>
        </div >
    );
}