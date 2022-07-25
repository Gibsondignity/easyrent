import React from 'react';
import Container from 'react-bootstrap/Container';
import style from './style.module.css';
import Header from './container';
import Link from 'next/link';
import WhyChooseUs from './WhyChooseUs';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const AboutBody = () => {
  return (
    <div>  
        <Header />
        <Container>
        <div className={style.grid}>
            <div className={style.box}>
                <h1 className={style.heading}>About Us</h1>
                <p className={style.p}>
                    EasyRent is formed by able and problem-solving young individuals with the intention of 
                    taking the stress out of the rental experience in Ghana.
                </p>
            </div>

            
            <div className={style.box}>
                <h1 className={style.heading}>Our Vision</h1>
                <p className={style.p}>To be Ghana’s number one solution company for accommodation rental.</p>
            </div>

            <div className={style.box}>
            <h1 className={style.heading}>Contacts</h1>
                <li className={style.contact_items}>Email:  info@easyrent.com</li>
                <li className={style.contact_items}>Contact: +233(0) 242 869 759</li>

                <div className={style.socialicons}>
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

            
        </div>


        <div className={style.box} style={{'marginTop':'30px'}}>
        <h1 className={style.heading}>Our Mission</h1>
               
               <ul className={style.list}>
                   <li>
                       To ensure that Ghanaians find affordable and comfortable accommodation with ease, 
                       without any financial burden. EasyRent aims to take the stress out of your rental experinence by helping 
                       you find a legitimate apartment that offers you flexibility in payment.
                   </li>
                   <li>To make decent accommodation accessible to all.</li>
                   <li>
                       We aim to take over the hassle of property management from property owners and tenants by providing 
                       several services within the rental period such as cleaning, professional maintenance, and moving (logistics), 
                       all of which can be accessed through our messaging service by both tenants and landlords. The whole process 
                       from touring the apartment to signing the contract and moving in can be easily managed by EasyRent.
                   </li>
               </ul>
        </div>

        
        </Container>

        <WhyChooseUs />
    </div>
  )
}


export default AboutBody;