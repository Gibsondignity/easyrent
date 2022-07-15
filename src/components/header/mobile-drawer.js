import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
// import { Link } from 'react-scroll';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from 'react-icons/fa';
import menuItems from './header.data';

const social = [
  {
    path: 'https://www.facebook.com',
    icon: <BsFacebook size={30} color="#1773EA" style={{margin: '.3rem',  cursor: 'pointer' }}/>,
  },
  {
    path: 'https://twitter.com/',
    icon: <BsTwitter size={30} color="#1C96E8" style={{margin: '.3rem', cursor: 'pointer' }}/>,
  },
  
  {
    path: 'https://twitter.com/',
    icon: <BsInstagram size={30} color="#9C30BF" style={{margin: '.3rem', cursor: 'pointer' }}/>,
  },
  

];




const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                href={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
              
            ))}
            <Link href="login">LOGIN</Link>
            <Link href="signup">SIGN UP</Link>
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <a href={path} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 967px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 1,
      mr: 4,
      transition: 'all 0.25s',
      cursor: 'pointer',
      svg: {
        fill: 'text',
        transition: 'all 0.25s',
      },
      ':last-child': {
        mr: '0',
      },
      '&:hover svg': {
        fill: 'primary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
