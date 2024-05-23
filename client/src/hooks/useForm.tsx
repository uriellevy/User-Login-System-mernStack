import { useState, ChangeEvent } from 'react';

type FormValues<T> = {
    [key in keyof T]: T[key];
};

function useForm<T>(initialValues: T) {
    const [values, setValues] = useState<FormValues<T>>(initialValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        })
    };

    console.log(values);

    return { values, handleChange }
}

export default useForm;