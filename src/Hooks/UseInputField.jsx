import React, { useState } from 'react';

const UseInputField = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handeFieldOnChange = e => {
        setFieldValue(e.target.value)
    }

    return [fieldValue, handeFieldOnChange]
};

export default UseInputField;