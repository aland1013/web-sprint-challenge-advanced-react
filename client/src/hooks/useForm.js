// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (initialState, key) => {
  const [values, setValues] = useLocalStorage(initialState, key);

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
    setValues({ ...values, showSuccessMessage: true });
    console.log(values);
    clearForm();
  };

  return [values, handleChanges, handleSubmit];
};
