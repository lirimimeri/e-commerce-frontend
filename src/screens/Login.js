import React, { useEffect, useState } from 'react';
import { Col, Button, Card, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { auth } from '../store/actions';

const Login = () => {
    const [isregister, setRegister] = useState(false);

    const { errorMessage, token, loading } = useSelector(({ auth }) => auth);
    const { handleSubmit, register, control, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        register('email', {
            required: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email e.x.: user@mail.com',
            },
        });
        register('password', { required: true });
    }, [register]);

    useEffect(() => {
        if (!token) return;

        const { exp } = jwt.decode(token);
        if (new Date() < new Date(exp * 1000)) history.push('/');
    }, [token, history]);

    const login = (data) => {
        if (!isregister) dispatch(auth(data));
        console.log('register');
    };

    return (
        <Col sm={10} md={6} lg={4} className="text-center mx-auto p-0 mt-5">
            <p className="text-danger">{errorMessage}</p>
            <Card className="p-3 text-left">
                <Form onSubmit={handleSubmit(login)}>
                    <label for="email">E-Mail Address</label>
                    <InputGroup>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ onChange, value }) => (
                                <Form.Control
                                    onChange={onChange}
                                    value={value}
                                    className="form-control"
                                    placeholder="Enter E-Mail"
                                />
                            )}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>
                                <i className="fa fa-envelope" />
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    {errors && errors.email && errors.email.type === 'required' && (
                        <small className="text-danger d-block">This field is required</small>
                    )}
                    {errors && errors.email && errors.email.type === 'pattern' && (
                        <small className="text-danger d-block">{errors.email.message}</small>
                    )}

                    <label className="mt-3">Password</label>
                    <InputGroup>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ onChange, value }) => (
                                <Form.Control
                                    onChange={onChange}
                                    value={value}
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                />
                            )}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>
                                <i className="fa fa-key" />
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    {errors && errors.password && errors.password.type === 'required' && (
                        <small className="text-danger d-block">This field is required</small>
                    )}

                    <Button type="submit" variant="primary" className="mt-3" block>
                        {loading ? (
                            <Spinner animation="border" size="sm" className="float-right mt-1" />
                        ) : isregister ? (
                            'Register'
                        ) : (
                            'Login'
                        )}
                    </Button>

                    <div class="mt-4 text-center">
                        Don't have an account? {' ' /*  eslint-disable-next-line */}
                        <a onClick={() => setRegister(!isregister)} href="#">
                            {isregister ? 'Log In' : 'Create One'}
                        </a>
                    </div>
                </Form>
            </Card>
        </Col>
    );
};

export default Login;
