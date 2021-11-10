import React, { useState } from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    ButtonParent,
    MobileNav
} from './NavbarElements';

const Navbar = () => {

    const [open, toggleOpen] = useState(false);

    const ButtonVariants = {
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
            opacity: "0",
            transition: {
                duration: "1",
                delay: "0.5"
            }
        },
        open: {
            opacity: "1",
            transition: {
                duration: "1",
                delay: "1"

            }
        }
    };

    return (
        <>
            <Nav>
                <Bars onClick={() => {
                    toggleOpen(!open);
                }} />
                <ButtonParent
                    variants={ButtonVariants}
                    initial="closed"
                    animate={open ? "open" : "closed"}
                >

                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/VirtualExhibit' >
                        Virtual Exhibit
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/port-page-one' >
                        Photography Portfolio
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/pc_builds' >
                        Computers
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/sign-up' >
                        Technology Portfolio
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/about-me' >
                        About Us
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/sign-up' >
                        Contact Us
                    </MobileNav>

                </ButtonParent>
                <NavMenu>
                    <NavLink to='/VirtualExhibit' >
                        Virtual Exhibit
                    </NavLink>
                    <NavLink to='/port-page-one' >
                        Photography Portfolio
                    </NavLink>
                    <NavLink to='/pc_builds' >
                        Computers
                    </NavLink>
                    <NavLink to='/sign-up' >
                        Technology Portfolio
                    </NavLink>
                    <NavLink to='/about-me' >
                        About Us
                    </NavLink>
                    <NavLink to='/sign-up' >
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
