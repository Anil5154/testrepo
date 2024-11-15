import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import ImageCar from '../../assets/img_car.png';
import ImageLogo from '../../assets/img_logo.png';
import HorizontalBar from '../../assets/img_horizontal_bar.png';
import { Checkbox } from 'primereact/checkbox';
import '../login/auth.css';
import { useLoginMutation } from '../../redux/api/authAPI';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/userSlice'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if (!username || !password) {
            return;
        }
        handleLogin(e);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ username, password }).unwrap();
            //TODO updated with actual function
            dispatch(setUser({ user: response.user, token: response.token }));
            console.log('Login successful:', response);
            if (rememberMe) {
                localStorage.setItem('token', response.token);
            }
            navigate('/');
        } catch (err) {
            // TODO Need to display the error
        }
    };

    return (
        <div className="login-page-container" >
            <div className='container'>
                <div className='container-left'>
                    <img className="horizontal-bar" src={HorizontalBar} alt="" />
                    <div className="brand-wrapper">
                        <span className="brand-text">Drive With <br />Big Apple Taxi</span>
                        <span className="brand-message">Simplify Operations, Maximize Efficiency</span>
                    </div>
                    <img className="car-image" src={ImageCar} alt="" />
                </div>
                <div className='container-right'>
                    <div className='form-container'>
                        <span className='sigin-text'>Sign in to your <br />account</span>
                        <div className="p-field" style={{ paddingTop: 5 }}>
                            <span>Welcome Back!</span>
                        </div>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="p-field">
                                <InputText
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    required
                                />
                            </div>

                            <div className="p-field">
                                <Password
                                    id="password"
                                    value={password}
                                    toggleMask={true}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    feedback={false}
                                    required
                                />
                            </div>

                            <div className="forgot-password-link">
                                <span>Forgot Password?</span>
                            </div>
                            <div className="p-field-checkbox">
                                <Checkbox
                                    inputId="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.checked)}
                                />
                                <span className="remember-me-label" >Remember Me</span>
                            </div>

                            <Button label="Sign In" icon="pi pi-sign-in" className="p-mt-3" />
                        </form>
                    </div>
                </div>
            </div>
            
            <img className="logo-image" src={ImageLogo} alt="" />

        </div>
    );
};

export default Login;
