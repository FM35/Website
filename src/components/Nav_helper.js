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

        //Self explanatory
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
                        to='/' >
                        Home
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/virtual-exhibit' >
                        Virtual Exhibit
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/photography-portfolio-page-one' >
                        Photography Portfolio
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/computer-portfolio' >
                        Computer Portfolio
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/technology-portfolio' >
                        Technology Portfolio
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/about-us' >
                        About Us
                    </MobileNav>
                    <MobileNav
                        variants={MobileMenuVariants}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                        to='/contact-us' >
                        Contact Us
                    </MobileNav>
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
                    <NavLink to='/technology-portfolio' >
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
