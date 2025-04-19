import React, { useState } from 'react';

const ControlledField = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('secrete')
    const [error, setErron] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        console.log(email, password);
        if (password.length<6) {
            setErron('password must be more be 6 character')
        }
        else {
            setErron('')
        }
    }

    const handlePassword = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
        
        if ( password.length < 6) {
            setErron('password must be more than 6 cgaracter');
    
        }
        else {
            setErron('')
        }
    
    }

    const changeEmailHandler = e => {
        setEmail(e.target.value)
    }

    
    return (
        <div>
            <form onSubmit={handleInput}>
                <input type="password" name="password" placeholder='password' onChange={handlePassword} defaultValue={password} required />
                <br />
                <input type="email" name="email" placeholder='Email' onChange={changeEmailHandler} defaultValue={email} required />
                <br />
                <input type="submit" name="" value="submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;