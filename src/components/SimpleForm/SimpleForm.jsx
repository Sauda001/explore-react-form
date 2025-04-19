import React from 'react';

const SimpleForm = () => {

    const submitForm = (e) => {
        e.preventDefault()
        console.log('handlesubmitted');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" name="name" id=" " placeholder='Your Name' />
                <br />
                <input type="text" name="email" id="" placeholder='Your email' />
                <br />
                <input type="submit" name="" id="" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;