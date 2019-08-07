import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo-black.png';
import { ButtonContainer } from './styled/ButtonContainer';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-white navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand nav-bar-icon-size"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" style={{
                            color:"black"
                        }}>
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto" >
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                            </span>
                            my cart                            
                        </ButtonContainer>
                </Link>
            </NavWrapper>
            )
    }
}

const NavWrapper = styled.nav`
    font-size: 1.3rem;
`
