import React, { useState } from 'react';
import './index.scss';
import { API_SERVICE } from '../../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formValues, setFormValues] = useState({ email: "john@test.com", password: "123456" });
    const [isLogging, setIsLoagging] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        if (!formValues.email || !formValues.password) {
            setError("Please enter valid credentials..!!")
        }
        else {
            API_SERVICE.post("/user/login", formValues).then((res) => {
                const data = res.data;
                if (data.error) {
                    setError(data.error);
                }
                else {
                    const { token, avatar } = data;
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user-details", JSON.stringify({ avatar }))
                    navigate("/pokemons");
                }
            })
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });

        if (error) {
            setError("");
        }
    }

    return (
        <div id="login-page">
            <div className='banner'>

            </div>
            <div className='login-form shadow'>
                <h5>Login to Pokedex</h5>
                <div className='w-50 mt-5'>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email address"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleInputChange}
                        />
                        <input type="submit" value="Login" />
                    </form>
                    <p className='text-danger mt-3'>{error}</p>
                </div>
            </div>
        </div>
    )
}

export default Login;
