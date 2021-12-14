import React, { useState } from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    ButtonParent,
    MobileNav,
    Close
} from './NavbarElements';

const Navbar = () => {

    const [open, toggleOpen] = useState(false);

    const Menu = {
        closed: {
            height: "0",
            transition: {
                duration: "1"
            }
        },
        open: {
            height: "60vh",
            transition: {
                duration: "1"
            }
        }
    };

    const MobileMenuVariants = {
        closed: {
            y: -100,
            opacity: "0",
            transition: {
                duration: "1",
                delay: "0.5"
            }
        },
        open: {
            y: 0,
            opacity: "1",
            transition: {
                duration: "1.75",
                delay: "0.05"

            }
        }
    };

    return (

        //Self explanatory
        <>
            <Nav>
                <div className={open ? 'display-none' : ''}>
                    <Bars onClick={() => {
                        toggleOpen(!open);
                    }} />
                </div>

                <div className={open ? '' : 'display-none'}>
                    <Close onClick={() => {
                        toggleOpen(!open);
                    }} />
                </div>

                <ButtonParent
                    variants={Menu}
                    initial='closed'
                    animate={open ? "open" : "closed"}
                >   <div className='navHidden'>
                        <MobileNav
                            variants={MobileMenuVariants}
                            initial='closed'
                            animate={open ? "open" : "closed"}
                            to='/' >
                            Home
                        </MobileNav>
                    </div>
                    <div className='navHidden'>
                        <MobileNav
                            variants={MobileMenuVariants}
                            initial='closed'
                            animate={open ? "open" : "closed"}
                            to='/virtual-exhibit' >
                            Virtual Exhibit
                        </MobileNav>
                    </div>
                    <div className='navHidden'>
                        <MobileNav
                            variants={MobileMenuVariants}
                            initial='closed'
                            animate={open ? "open" : "closed"}
                            to='/photography-portfolio-page-one' >
                            Photography Portfolio
                        </MobileNav>
                    </div>
                    <div className='navHidden'>
                        <MobileNav
                            variants={MobileMenuVariants}
                            initial='closed'
                            animate={open ? "open" : "closed"}
                            to='/computer-portfolio' >
                            Computer Portfolio
                        </MobileNav>
                    </div>
                    <div className='navHidden'>
                        <MobileNav
                            variants={MobileMenuVariants}
                            initial='closed'
                            animate={open ? "open" : "closed"}
                            to='/technology-portfolio-page-one' >
                            Technology Portfolio
                        </MobileNav>
                    </div>
                    <div className='navHidden'>
                        <MobileNav
                            variants={MobileMenuVariants}
                            initial='closed'
                            animate={open ? "open" : "closed"}
                            to='/about-us' >
                            About Us
                        </MobileNav>
                    </div>
                    <div className='navHidden'>
                        <MobileNav
                            variants={MobileMenuVariants}
                            initial='closed'
                            animate={open ? "open" : "closed"}
                            to='/contact-us' >
                            Contact Us
                        </MobileNav>
                    </div>
                </ButtonParent>
                <NavMenu>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/virtual-exhibit' >
                        Virtual Exhibit
                    </NavLink>
                    <NavLink to='/photography-portfolio-page-one' >
                        Photography Portfolio
                    </NavLink>
                    <NavLink to='/computer-portfolio' >
                        Computer Portfolio
                    </NavLink>
                    <NavLink to='/technology-portfolio-page-one' >
                        Technology Portfolio
                    </NavLink>
                    <NavLink to='/about-us' >
                        About Us
                    </NavLink>
                    <NavLink to='/contact-us' >
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
