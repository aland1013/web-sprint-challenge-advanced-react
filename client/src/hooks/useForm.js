// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = () => {
    setValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues((prev) => ({ ...prev, showSuccessMessage: true }));
  };

  return [values, handleChanges, handleSubmit];
};
