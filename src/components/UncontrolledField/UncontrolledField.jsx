import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('')
    const pasRef = useRef('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log('sb')
        const email = emailRef.current.value;
        const pas = pasRef.current.value;
        console.log(email,pas)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" ref={emailRef} />
                <br />
                <input type="password" name="password" ref={pasRef} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;