import styled from 'styled-components';
import logo from '../assets/img/LOGO-REDONDO-HONDO.png';
import CartWidget from './CartWidget';

const Nav = styled.nav`

    width: 100vw;
    height: 95px;
    display: inline-flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    align-content: center;
    align-items: center;
    background: linear-gradient(to top, rgba(208, 135, 0, 0.2), rgba(208, 135, 0, 0.8) 20%);

    .logo-navbar {
        height: 70px;
        align-self: left;
        margin: 5px 15px;
        border: 1px solid rgba(202, 202, 202, 1);
        border-radius: 100%;
    }

    .ul-navbar {
        list-style: none;
        text-decoration: none;
    }

    .li-navbar {
        display: inline-flex;
        margin-right: 10px;
        padding: 1.5rem;
    }

    .li-navbar a, :hover, :visited {
        font-weight: 500;
        list-style: none;
        text-decoration: none;
        color: black;
    }

    .li-navbar a:hover{
        color: white;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <img src={logo} alt="Logo Cookardas" className='logo-navbar'></img>

            <ul className='ul-navbar'>
                <li className='li-navbar'><a href="#">Productos</a></li>
                <li className='li-navbar'><a href="#">Ofertas</a></li>
                <li className='li-navbar'><a href="#">Contacto</a></li>
            </ul>

            <CartWidget />
        </Nav>
    )
};

export default NavBar;