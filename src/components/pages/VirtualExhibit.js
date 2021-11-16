import React from "react";
import './VirtualExhibit.css';
import { Link } from 'react-router-dom';
import Navbar from '../Nav_helper';



export default function VirtualExhibit() {

    return (

        <div className='exhibit-container'>
            <Navbar />
            <div className='title-3'>
                <div style={{ color: "white" }} className='heading-3'> Virtual Exhibit</div>
            </div>
            <div className='mobilePC'>
                <p style={{ color: 'white', textAlign: 'center' }} className='section1'> Are you on a mobile device or computer?</p>
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