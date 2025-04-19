import React, {  } from 'react';
import UseInputField from '../../Hooks/UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = UseInputField();
    const [email, emailOnChange] = UseInputField();
    const [password, passwordOnChange] = UseInputField();

    const handleOnSubmit = e =>{ 
        e.preventDefault()
        console.log('sb',name,email,password);
        
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="name" defaultValue={name} onChange={nameOnChange}/>
            <br />
            <input type="email" name="email" defaultValue={email} onChange={emailOnChange} />
            <br />
            <input type="password" name="password" defaultValue={password} onChange={passwordOnChange} />
            <br />
            <input type="submit" value="submit" />
        </form>
    );
};

export default HookForm;