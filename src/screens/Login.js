import React, { useEffect, useState } from 'react';
import { Col, Button, Card, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { auth, registerUser } from '../store/actions';

const Login = () => {
    const [isRegistered, setRegistered] = useState(false);

    const { errorMessage, token, loading } = useSelector(({ auth }) => auth);
    const { handleSubmit, register, control, errors, unregister } = useForm();
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

        if (!isRegistered) {
            unregister('address', { required: true });
            unregister('name', { required: true });
            return;
        }
    }, [register, isRegistered]);

    useEffect(() => {
        if (!token) return;

        const { exp } = jwt.decode(token);
        if (new Date() < new Date(exp * 1000)) history.push('/');
    }, [token, history]);

    const authenticate = (data) => {
        console.log('authenticate');
        const { email, password } = data;

        if (isRegistered) return dispatch(registerUser(data));
        dispatch(auth({ email, password }));
    };

    return (
        <Col sm={10} md={6} lg={4} className="text-center mx-auto p-0 mt-5">
            <p className="text-danger">{errorMessage}</p>
            <Card className="p-3 text-left">
                <Form onSubmit={handleSubmit(authenticate)}>
                    <label>E-Mail Address</label>
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

                    {errors?.email?.type === 'required' && (
                        <small className="text-danger d-block">This field is required</small>
                    )}

                    {errors?.email?.type === 'pattern' && (
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

                    {errors?.password?.type === 'required' && (
                        <small className="text-danger d-block">This field is required</small>
                    )}

                    {isRegistered && (
                        <>
                            <label className="mt-3">Address</label>
                            <InputGroup>
                                <Controller
                                    name="address"
                                    control={control}
                                    defaultValue=""
                                    render={({ onChange, value }) => (
                                        <Form.Control
                                            onChange={onChange}
                                            value={value}
                                            className="form-control"
                                            placeholder="Enter Address"
                                        />
                                    )}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>
                                        <i className="fa fa-location-arrow" />
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            {errors?.address?.type === 'required' && (
                                <small className="text-danger d-block">This field is required</small>
                            )}

                            <label className="mt-3">Name</label>
                            <InputGroup>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ onChange, value }) => (
                                        <Form.Control
                                            onChange={onChange}
                                            value={value}
                                            className="form-control"
                                            placeholder="Enter Address"
                                        />
                                    )}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>
                                        <i className="fa fa-user" />
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                            {errors?.name?.type === 'required' && (
                                <small className="text-danger d-block">This field is required</small>
                            )}
                        </>
                    )}

                    <Button type="submit" variant="primary" className="mt-3" block>
                        {isRegistered ? 'Register' : 'Login'}
                    </Button>

                    <div className="mt-4 text-center">
                        Don't have an account? {' ' /*  eslint-disable-next-line */}
                        <span onClick={() => setRegistered(!isRegistered)} style={{ cursor: 'pointer', color: 'blue' }}>
                            {isRegistered ? 'Log In' : 'Create One'}
                        </span>
                    </div>
                </Form>
            </Card>
        </Col>
    );
};

export default Login;
