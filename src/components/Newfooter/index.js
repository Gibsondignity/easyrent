import React from 'react';

// images
// import EasyrentLogo from 'assets/images/Easy-Rent-logo.png';
// import EasyrentLogo from 'https://i.imgur.com/QBSz4Lw.png';
// import Cozytech from 'https://i.imgur.com/ZizmIEm.jpg';

import style from './style.module.css';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
        <div className={style.footer}>
            <div className={style.logoArea}>
                <div>
                <img src="https://i.imgur.com/QBSz4Lw.png" width={150} height={150}/>
                </div>

                <div>
                    
                    <ul>
                        <li className={style.links_title}>Links</li>
                        <Link href="/"><li className={style.links}>Home</li></Link>
                        <Link href="/about"><li className={style.links}>About</li></Link>
                        <Link href="/login"><li className={style.links}>Apply</li></Link>
                        <Link href="/calculator"><li className={style.links}>Calculator</li></Link>
                    </ul>
                </div>
            </div>

            {/* <div className={style.socialMedia}> */}
                <div className={style.about}>
                    <p>Visit our office at Harriman Plaza, 1st floor, office N#2</p>
                    <p>Powered by Cozytech Solutions<img src="https://i.imgur.com/ZizmIEm.jpg" width={80} height={80} /></p>
                </div>

                <div className={style.socials}>
                    <Link href="https://www.facebook.com/EasyRent-10990986801098/">
                        <BsFacebook size={50} color="#1773EA" style={{margin: '.3rem',  cursor: 'pointer' }}/>
                    </Link>

                    <Link href="https://www.instagram.com/easyrent/">
                        <BsTwitter size={50} color="#1C96E8" style={{margin: '.3rem', cursor: 'pointer' }}/>
                    </Link>

                    <Link href="https://www.instagram.com/easyrent/">
                        <BsInstagram size={50} color="#9C30BF" style={{margin: '.3rem', cursor: 'pointer' }}/>
                    </Link>
                </div>
            {/* </div> */}
        </div>

    </div>
  )
}


export default Footer;
