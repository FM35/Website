import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";

export const Nav = styled.nav`

height: 55px;
display: flex;
z-index: 12;
position: relative;
left: 0px;
justify-content: center;

`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid black;

@media screen and (max-width: 1100px) {
	display: none;
}
`;

export const NavLink = styled(Link)`

color: #000000;
display: flex;
align-items: center;
text-align: center;
text-decoration: none;
padding: 0 2.5rem;
height: 100%;
cursor: pointer;
im
`;

export const MobileNav = styled(motion(Link))`

@media screen and (min-width: 1100px) {
	display: none;
}

color: #000000;
display: flex;
position:relative;
align-items: center;
justify-content: center;
font-size: 1.0rem;
im
width: 100%;
text-decoration: none;
padding: 0 1rem;
height: 8.57vh;
cursor: pointer;
overflow: hidden;
`;

export const Bars = styled(FaBars)`
display: none;
color: #000000 !important;
@media screen and (max-width: 1100px) and (min-width: 500px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 2.0rem;
	cursor: pointer;
}
@media screen and (max-width: 500px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const Close = styled(FaTimes)`
display: none;

@media screen and (max-width: 1100px) and (min-width: 500px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 2.0rem;
	cursor: pointer;
	z-index: 11;
}
@media screen and (max-width: 500px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
	z-index: 11;
}
`;


export const ButtonParent = styled(motion.div)`
display: none;
width: 0px;

@media screen and (max-width: 1100px) {  
position: absolute;
display: flex;
flex-direction: column;
background: #f9f9f9;
top: 100%;
align-items: flex-end;
width: 100%;
z-index:12;
overflow: hidden;
}
`;

