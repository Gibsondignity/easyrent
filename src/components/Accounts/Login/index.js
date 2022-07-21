import style from './style.module.css'
import { Form, Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, reset_register_success } from '../../../actions/auth';
import  Loader  from 'react-loader-spinner';

 
const Loginpage = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {
        email,
        password,
    } = formData;

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(reset_register_success());
    }, [dispatch]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(login(email, password));
    };

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard/dashboard');

    return (
      <>
      <div className="row title" style={{ marginBottom: "170px" }} ></div>  
        <Container className={style.container}>

          <div className={style.form}>
            <h2>Login</h2>
            <Form onSubmit={onSubmit}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                required
                name='email'
                onChange={onChange}
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
                required
                name='password'
                onChange={onChange}
                value={password}
                minLength='6'
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>

              <span><i>Don&apos;t have an account yet? </i></span><Link href="signup">Register</Link><br/>
              <Link href="/">Forgot Password?</Link><br/>
              
              <br />
                {/* {
                  loading ? (
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                      <Loader
                        type="Puff"
                        color="#00BFFF"
                        width={50}
                        height={50}
                      />
                    </div>
                  ) : (
                    <Button type="submit">
                      Login
                    </Button>
                  )
                } */}

                    <Button style={{'backgroundColor':"#F94001"}} type="submit">
                      Login
                    </Button>
              

            </Form>

          </div>
        </Container>


      </>
    );
};

export default Loginpage;