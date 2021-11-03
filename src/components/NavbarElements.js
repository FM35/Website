import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";

export const Nav = styled.nav`
background: #303134;
height: 55px;
display: flex;
justify-content: center;
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
opacity: 87%;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 3rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

export const MobileNav = styled(motion(Link))`
color: #FFFFFF;
opacity: 87%;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
text-decoration: none;
padding: 0 1rem;
height: 16.67%;
cursor: pointer;
&.active {
	color: #000000;
}
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
	display: none;
}
`;

export const ButtonParent = styled(motion.div)`
display: none;

@media screen and (max-width: 768px) {  
position: relative;
display: flex;
flex-direction: column;
top: 100%;
left: 5%;
background: #303134;
display: flex;
flex-direction: column;
align-items: flex-end;
width: 90%;
z-index:1;
}
`;
