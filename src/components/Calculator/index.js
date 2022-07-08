import React, { useState } from 'react';
import {Card, Form, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import style from './style.module.css'

const Calculator = () => {

    const [netSalary, setSalary] = useState(0);    
    const [rentAmount, setAmount] = useState(0);    
    const [year, setYear] = useState(0);    

    const [message, setMessage] = useState('');   
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [yearPayment, setYearPayment] = useState(1)
    // const [monthlyPayment, setMonthlyPayment] = useState(0);

    

    let calEligibility = (e) => {
        // prevent default
        const year_rate = 0.23;
        const two_year_rate = 0.25;
        e.preventDefault();

        if (netSalary === 0 || rentAmount === 0) {
            setMessage('Please enter monthly salary and rent amount');
        }
        else {
            if(year === 1){
                let monthly_payment = parseFloat(((rentAmount * year_rate) + parseFloat(rentAmount)));
                let year_payment = parseFloat(((rentAmount * year_rate) + parseFloat(rentAmount)) * 12);
                setMonthlyPayment(monthly_payment.toFixed(2) );
                setYearPayment(year_payment.toFixed(2));
                console.log(monthly_payment, rentAmount, year_rate);
            }

            else if(year === 2){
                let monthly_payment = parseFloat(((rentAmount * two_year_rate) + parseFloat(rentAmount)));
                let year_payment = parseFloat(((rentAmount * two_year_rate) + parseFloat(rentAmount)) * 12);
                setMonthlyPayment(monthly_payment.toFixed(2) );
                setYearPayment(year_payment.toFixed(2));
                console.log(monthly_payment, rentAmount, two_year_rate);
            }
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
                                
                                
                                <Form.Label htmlFor="basic-url">Monthly Rent Amount Charged</Form.Label>
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
                                        <option eventKey={3} value={3}>3 Years</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <Button className={style.button} type="submit">CHECK ACCEPTABILITY</Button><br/>
                                <Button className={style.reload} onClick={reload} type="submit">Reload</Button>
                            </Form>
                        </Card.Body>

                    </div>

                    <div className={style.results}>

                        <p>{ message }</p>
                        <hr/>
                        <p>Rent Period: { year } Year/Years</p>
                        <hr/>
                        <p>Expected Monthly Rent Payment: GH¢{ monthlyPayment }</p>
                        <hr/>
                        <p>Overall Amount: GH¢{ yearPayment }</p>
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