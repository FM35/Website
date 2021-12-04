import React from "react";
import './VirtualExhibit.css';
import { Link } from 'react-router-dom';
import Navbar from '../Nav_helper';

export default function VirtualExhibit() {

    return (

        //Self explanatory

        <div className='exhibit-container'>
            <Navbar />
            <div style={{ color: "white" }} className='heading'> Virtual Exhibit</div>
            <div className='mobilePC'>
                <p className='question'> Are you on a mobile device or computer?</p>
                <Link to='/virtual-exhibit-computer' className='mobilePCButton'>
                    Computer
                </Link>
                <Link to='/virtual-exhibit-mobile' className='mobilePCButton'>
                    Mobile
                </Link>
            </div>
        </div >
    );
}