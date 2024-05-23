import { FormEvent, useContext } from "react";
import { AuthContextType, IAuth } from "../../interfaces/interfaces";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {error, handleSignup} = useContext(AuthContext) as AuthContextType;
  const { values, handleChange } = useForm<IAuth>({ email: "", password: "" });
  const navigate = useNavigate();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await handleSignup(values);
    if(!success) return;
    navigate("/home")
  };

  return (
    <div className="signupContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter email..."
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <input
          type="text"
          placeholder="Enter password..."
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <input type="submit" value="Signup" />
      </form>
    {error && <div>{error}</div>}
    </div>
  );
};

export default Signup;
