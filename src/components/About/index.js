import React from 'react';
import { Container } from 'react-bootstrap';
import style from './style.module.css';

const About = () => {
  return (
    <div>
        <Container className={style.main}>
            <div className="row title" style={{ marginBottom: "190px" }} ></div>  

            <div>
                <h1 className={style.heading}>About Us</h1>
                <p className={style.p}>
                    EasyRent is formed by able and problem-solving young individuals with the intention of 
                    taking the stress out of the rental experience in Ghana.
                </p>
            </div>

            
            <div>
                <h1 className={style.heading}>Our Mission</h1>
               
                <ul className={style.list}>
                    <li>
                        To ensure that Ghanaians find affordable and comfortable accommodation with ease, 
                        without any financial burden: Let EasyRent take the stress out of your rental 
                        experience in Ghana. Finding a legitimate apartment that offers you flexibility in 
                        payment can be daunting. The most common headache among rent-seekers in Ghana is many 
                        fake agents, websites, and the two years rent advance demanded by property owners. 
                        This is where EasyRent comes in. Our mission is to ensure that Ghanaians find affordable 
                        and comfortable accommodation with a flexible payment plan.
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

            <div>
                <h1 className={style.heading}>Our Vision</h1>
                <p className={style.p}>To be Ghana’s number one solution company for accommodation rental.</p>
            </div>
            
        </Container>
    </div>
  )
}


export default About;