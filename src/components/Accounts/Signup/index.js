import style from './style.module.css'
import { Form, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../actions/auth';
import { Loader } from 'react-loader-spinner'
import { useRouter } from 'next/router';
import router from 'next/router';

const Signuppage = () => {
  const dispatch = useDispatch();
    const router = useRouter();
    const register_success = useSelector(state => state.auth.register_success);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    });

    const {
        first_name,
        last_name,
        email,
        password,
        re_password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(register(first_name, last_name, email, password, re_password));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard');
    if (register_success)
        router.push('/login');

 
    return (
      <>

        <div className="row title" style={{ marginBottom: "170px" }} ></div>  
        <Container className="mt-5">

          <div className={style.form}>
            <h2>Login</h2>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFName">
                <Form.Label>First Name</Form.Label>
                
                <Form.Control 
                type="text" 
                placeholder="First Name" 
                name="first_name"
                onChange={onChange} 
                required 
                value={first_name}
                />

                <Form.Text>
                  We&apos;ll never share your name with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLName">
                <Form.Label>Last name</Form.Label>
                
                <Form.Control 
                type="last_name" 
                placeholder="Last Name" 
                name="last_name"
                onChange={onChange} 
                required 
                value={last_name}
                />

                <Form.Text>
                  We&apos;ll never share your name with anyone else.
                </Form.Text>
              </Form.Group>

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
                maxLength="8"
                />

              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicRPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                name="re_password" 
                onChange={onChange} 
                required 
                value={re_password}
                maxLength="8"
                />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <span><i>Already have an account? </i></span><Link href="login">Login</Link><br/>
              {/* <Link href="/">Forgot Password?</Link><br/> */}
              
              <br />
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>

          </div>
        </Container>


      </>
    )
  }
  
  export default Signuppage;