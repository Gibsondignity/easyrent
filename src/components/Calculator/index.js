import React, { useState } from 'react';
import {Card, Form, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import style from './style.module.css'

const Calculator = () => {

    const [netSalary, setSalary] = useState(0);    
    const [rentAmount, setAmount] = useState(0);    
    const [year, setYear] = useState('1');    

    const [message, setMessage] = useState('Message appears here');   
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [yearPayment, setYearPayment] = useState(0);

    const [userNetSalary, setUserNetSalary] = useState(0);

    

    let calEligibility = (e) => {
        // prevent default
        const year_rate = 0.23;
        const two_year_rate = 0.25;
        e.preventDefault();
        let message = '';
        if (netSalary === 0 || rentAmount === 0 || netSalary === '' || rentAmount === '') {
            message = <p style={{ 'color': 'red' }}>Please enter monthly salary and rent amount</p>;
            setMessage(message);
            setMonthlyPayment(0);
            setYearPayment(0);
            setUserNetSalary(0);
        }
        else {
            if(year === '1'){
                let monthly_payment = parseFloat(((rentAmount * year_rate) + parseFloat(rentAmount)));
                setMonthlyPayment(monthly_payment.toFixed(2) );


                let year_payment = parseFloat(((rentAmount * year_rate) + parseFloat(rentAmount)) * 12);
                setYearPayment(year_payment.toFixed(2));


                // Percentage of user net salary for 1 year
                let user_net_salary = parseFloat((netSalary * 12));
                setUserNetSalary(user_net_salary.toFixed(2)); 
                
            }

            
            if(year === '2'){

                let monthly_payment = parseFloat(((rentAmount * two_year_rate) + parseFloat(rentAmount)));
                setMonthlyPayment(monthly_payment.toFixed(2) );


                let year_payment = parseFloat(((rentAmount * two_year_rate) + parseFloat(rentAmount)) * 24);
                setYearPayment(year_payment.toFixed(2));
                
              
                // Percentage of user net salary for 2 year
                let user_net_salary = parseFloat((netSalary * 24));
                setUserNetSalary(user_net_salary.toFixed(2));
                
            }

            handleMessage();

        }
        
    }


    let handleMessage = () => {

        let message = '';
        console.log(( salary > yearPayment));

        let salary = userNetSalary / 2;
        console.log(salary);
        console.log(yearPayment) 

        if(salary <= yearPayment){
            message = <p style={{ 'color': 'red' }}>You are not eligible</p>;
            setMessage(message);
        }
        else if(salary > yearPayment){
            message = <p style={{ 'color': 'green' }}>You are eligible</p>;
            setMessage(message);
        }
        else{
            setMessage('');
        }
    }


    let reload = () => {
        window.location.reload();
      }


  return (
    <div>
        <div className="row title" style={{ marginBottom: "190px" }} ></div>  
        <Container className={style.main}>
            
            <Card>
                <div className={style.cardbody}>
                    <div>
                        <Card.Body>
                            <Form onSubmit={calEligibility}>
                                <Form.Label htmlFor="basic-url">Net Monthly Salary</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>GH¢</InputGroup.Text>
                                    <FormControl value={netSalary} onChange={(e) => setSalary(e.target.value)} aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text >.00</InputGroup.Text>
                                </InputGroup>
                                
                                
                                <Form.Label htmlFor="basic-url">Monthly Rent Amount Charged By LandLord</Form.Label>
                                <Form.Label htmlFor="basic-url"></Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>GH¢</InputGroup.Text>
                                    <FormControl value={rentAmount} onChange={(e) => setAmount(e.target.value)} aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup>
                                

                                
                                <Form.Group className="mb-3">
                                    <Form.Label>Choose Number of Years</Form.Label>
                                    <Form.Select 
                                    onChange={(e) => setYear(e.target.value)}
                                    >
                                        <option eventKey={1} value={1}>1 Year</option>
                                        <option eventKey={2} value={2}>2 Years</option>
                                        
                                    </Form.Select>
                                </Form.Group>
                                
                                <Button className={style.button} type="submit">CHECK QUALIFICATION</Button><br/>
                                <Button className={style.reload} onClick={reload} type="submit">RELOAD</Button>
                            </Form>
                        </Card.Body>

                    </div>

                    <div className={style.results}>

                        <p> { message } </p>
                        <hr/>
                        <p>Rent Period: { year } Year/Years</p>
                        <hr/>
                        <p> Monthly Rent Payment: GH¢ { monthlyPayment }</p>
                        <hr/>
                        <p>Overall Amount: GH¢ { yearPayment }</p>
                        {/* <hr/>
                        <p>Amount Due Before Moving: {}</p> */}
                    </div>
                </div>
            </Card>

        </Container>
    </div>
  )
}


export default Calculator