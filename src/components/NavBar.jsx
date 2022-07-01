import styled from 'styled-components';
import logo from '../assets/img/LOGO-REDONDO-HONDO.png';

const Nav = styled.nav`

    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    align-content: center;
    align-items: center;
    z-index: 5;
    background: rgba(208, 135, 0, 0.8);
    background: linear-gradient(to top, white, rgba(208, 135, 0, 0.8) 5%);

    .logo-navbar {
        height: 90px;
        align-self: left;
        margin: 5px 15px;
        border: 2px solid rgba(202, 202, 202, 0.8);
        border-radius: 100%;
    }

    .ul-navbar {
        list-style: none;
        text-decoration: none;
    }

    .li-navbar {
        display: inline-flex;
        padding: 1.2rem;
    }

    .li-navbar a, :hover, :visited {
        font-size: 1.4rem;
        font-weight: 700;
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
        </Nav>
    )
};

export default NavBar;