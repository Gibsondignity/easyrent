import React from 'react';


import style from './style.module.css';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

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

            <div className={style.about}>
                <p>Visit our office at Harriman Plaza, 1st floor, office N#2</p>
                <p>Powered by Cozytech Solutions<img src="https://i.imgur.com/REuSSUJ.jpg" width={130} height={50} /></p>
            </div>

            <div className={style.socials}>
                <di>
                    <ul className={style.contacts_list}>
                        <li className={style.contacts}>Contacts</li>
                        <li className={style.contact_items}>info@easyrent.com</li>
                        <li className={style.contact_items}>+233(0) 242 869 759</li>
                        
                        
                    </ul>
                </di>
                <div>
                    <Link href="https://www.facebook.com/EasyRent-10990986801098/">
                        <BsFacebook size={40} color="#1773EA" style={{margin: '.3rem',  cursor: 'pointer' }}/>
                    </Link>

                    <Link href="https://www.instagram.com/easyrent/">
                        <BsTwitter size={40} color="#1C96E8" style={{margin: '.3rem', cursor: 'pointer' }}/>
                    </Link>

                    <Link href="https://www.instagram.com/easyrent/">
                        <BsInstagram size={40} color="#9C30BF" style={{margin: '.3rem', cursor: 'pointer' }}/>
                    </Link>
                </div> 
            </div>

            <div className={style.about1}>
                {/* <p>Visit our office at Harriman Plaza, 1st floor, office N#2</p> */}
                <br />
                <p>Powered by Cozytech Solutions<img src="https://i.imgur.com/REuSSUJ.jpg" width={130} height={50} /></p>
            </div>

        </div>

    </div>
  );
}


export default Footer;
