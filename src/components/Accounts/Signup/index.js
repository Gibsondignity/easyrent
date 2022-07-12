import style from './style.module.css'
import { Form, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../pages/api/account/register';
import { Loader } from 'react-loader-spinner'

const Signuppage = () => {
  const register_success = useSelector(state => state.auth.register_success);
  const loading = useSelector(state => state.auth.loading);


  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username_name: '',
    email: '',
    password: '',
    re_password: '',
  });

  const {
    first_name,
    last_name,
    username_name,
    email,
    password,
    re_password,
  } = formData;

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);

    if (dispatch && dispatch !== null && undefined)
       dispatch(register(first_name, last_name, username_name, email, password, re_password));
  }

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
 
    return (
      <>

  <div className="row title" style={{ marginBottom: "170px" }} ></div>  
        <Container className="mt-5">

          <div className={style.form}>
            <h2>Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name="email"
                onChange={onChange} 
                required 
                value={email}
                />

                <Form.Text>
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                name="password" 
                onChange={onChange} 
                required 
                value={password}
                />

              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                name="re_password" 
                onChange={onChange} 
                required 
                value={re_password}
                />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <span><i>Already have an account? </i></span><Link href="login">Login</Link><br/>
              {/* <Link href="/">Forgot Password?</Link><br/> */}
              
              <br />
              <Button variant="primary" type="submit" onSubmit={onSubmit}>
                Submit
              </Button>
            </Form>

          </div>
        </Container>


      </>
    )
  }
  
  export default Signuppage;