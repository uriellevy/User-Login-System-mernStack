import { FormEvent, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { AuthContextType, IAuth } from '../../interfaces/interfaces';
import useForm from '../../hooks/useForm';

const Login = () => {
  const {error, handleLogin} = useContext(AuthContext) as AuthContextType;
  const { values, handleChange } = useForm<IAuth>({ email: "", password: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(values);
    if(error) return;
  };

  console.log(error);

  return (
    <div className='loginContainer'>
        <form className='formContainer' onSubmit={handleSubmit}>
            <input
             type="text"
              placeholder='Enter email...'
              name='email'
              onChange={handleChange}
              value={values.email}/>
            <input 
            type="text"
             placeholder='Enter password...'
             name='password'
             onChange={handleChange}
             value={values.password}/>
            <input type="submit" value="Login"/>
        </form>
    {error && <div>{error}</div>}
    </div>
  )
}

export default Login