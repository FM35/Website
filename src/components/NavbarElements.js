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
border-bottom: 1px solid white;

@media screen and (max-width: 1100px) {
	display: none;
}
`;

export const NavLink = styled(Link)`

color: #FFFFFF;
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

color: #FFFFFF;
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
color: #FFFFFF;
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
color: #FFFFFF;
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

export const Close2 = styled(FaTimes)`

	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
	color: #000;
`;


export const ButtonParent = styled(motion.div)`
display: none;
width: 0px;

@media screen and (max-width: 1100px) {  
position: absolute;
display: flex;
flex-direction: column;
background: #090909;
top: 100%;
align-items: flex-end;
width: 100%;
z-index:12;
overflow: hidden;
}
`;

export const PopUp = styled(motion.div)`
 
margin: auto;
position: fixed;
top: 0; left: 0; bottom: 0; right: 0;
background: #0b0b0b;
width: 80%;
z-index:12;
overflow: hidden;
border-radius: 25px;
`;