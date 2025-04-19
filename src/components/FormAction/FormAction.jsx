import React from 'react';

const FormAction = () => {
    const handleFormAcrtion = (formData) => {
        console.log(formData);
        console.log(formData.get('name'));
        console.log(formData.get('email'));
        
    }
    return (
        <div>
            <form action={handleFormAcrtion}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email' />
                <br />
                <input type="submit" name="" id="" value='submit'/>
            </form>
        </div>
    );
};

export default FormAction;