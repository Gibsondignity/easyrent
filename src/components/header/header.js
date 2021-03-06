/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
// import { Link } from 'react-scroll';
import Link from 'next/link';
import Logo from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import Dropdown from 'react-bootstrap/Dropdown';
import style from './style.module.css';


// import EasyrentLogo from 'assets/images/Easy-Rent-logo.png';
// import EasyrentLogo from 'https://i.imgur.com/QBSz4Lw.png';
import Divider from 'assets/divider.svg';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src="https://i.imgur.com/QBSz4Lw.png" width={100} height={100}/>

          <Flex as="nav" sx={styles.nav}> 
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                href={path}
                key={i}
              >  
                {label}
              </Link>
            ))}
          </Flex>
          
          <Dropdown className={style.dropdown}>
            <Dropdown.Toggle style={{'backgroundColor':"#2798B7" }} id="dropdown-basic">
              Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item ><Link href="login">Log In</Link></Dropdown.Item>
              <Dropdown.Item ><Link href="signup">Sign Up</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    py: [4, null, 5],
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      backgroundImage: ['none', null, null, null, `url(${Divider})`],
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      backgroundSize: 'contain',
      backgroundColor: ['#FEEDEF', null, null, null, 'transparent'],
      color: 'primary',
      fontWeight: 'bold',
      py: ['12px', null, null, null, 2],
      px: [3, null, null, null, 0],
      ':hover': {
        backgroundColor: ['primary', null, null, null, 'transparent'],
        color: ['white', null, null, null, 'primary'],
      },
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: 'heading',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: '20px',
      'nev > a': {
        color: 'heading',
      },
      '.donate__btn': {
        border: '0px solid',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    ml: 'auto',
    mr: 6,
    display: 'none',
    '@media screen and (min-width: 967px)': {
      display: 'block',
    },

    // '@media screen and (max-width: 1024px)': {
    //   color: 'white',
    //   backgroundColor: 'white',
    // },
    
    a: {
      fontSize: '20px',
      fontWeight: 'heading',
      px: 12,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      color: 'heading',
      '&.active': {
        color: 'primary',
      },
    },
  },
};
