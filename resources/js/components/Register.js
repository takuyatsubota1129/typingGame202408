import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});
    const history = useHistory();  // useNavigateの代わりにuseHistoryを使用

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            });
            history.push('/dashboard');  // navigateの代わりにhistory.pushを使用
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Registration failed', error);
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name[0]}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password[0]}</p>}

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                />
                {errors.password_confirmation && <p style={{ color: 'red' }}>{errors.password_confirmation[0]}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
