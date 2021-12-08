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

@media screen and (max-width: 972px) {
	display: none;
}
`;

export const NavLink = styled(Link)`

color: #FFFFFF;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 2.5rem;
height: 100%;
cursor: pointer;
font-family: 'Roboto Slab', serif;
`;

export const MobileNav = styled(motion(Link))`

@media screen and (min-width: 972px) {
	display: none;
}

color: #FFFFFF;
display: flex;
position:relative;
align-items: center;
justify-content: center;
font-family: 'Roboto Slab', serif;
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
@media screen and (max-width: 972px) {
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
@media screen and (max-width: 972px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;


export const ButtonParent = styled(motion.div)`
display: none;
width: 0px;

@media screen and (max-width: 972px) {  
position: absolute;
display: flex;
position: relative;
flex-direction: column;
background: #0b0b0b;
top: 100%;
align-items: flex-end;
width: 90%;
z-index:12;
overflow: hidden;
}
`;
