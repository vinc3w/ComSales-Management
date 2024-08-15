import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";
import axios from "axios";

import Input from "../../../Components/Input";
import FormButton from "../../../Components/FormButton";
import { useAuth } from "../../../hooks/useAuth";

function Form() {

  const [user, _, getUser] = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async e => {
    try {

      e.preventDefault();
      
      if (isLoading) return;
      setErrorMessage('');
      setIsLoading(true);

      const formData = Object.fromEntries(new FormData(e.target));
      const response = await axios.post(`${SERVER_URL}/auth/login`, formData);

      setIsLoading(false);
      document.cookie = `token=${response.data.token}; path=/`;
      getUser();
      
    } catch (error) {

      setIsLoading(false);
      setErrorMessage(error.response?.data.error || error.message);
      
    }
  }

  useEffect(() => {

    if (!user) return;
    // setSuccessMessage('Login Successful. Redirectign to dashboard')
    // setTimeout(() => navigate('/dashboard', { replace: true }), 3000);

  }, [user])

  return (
    <form onSubmit={login} autoComplete="off">

      <div className="error-message">{ errorMessage }</div>
      <Input label="Email" name="email" />
      <Input label="Password" type="password" name="password" />

      <div className="middle">

        <div className="checkbox-container">
          <input type="checkbox" name="remember" />
          <div className="label">Remember Me</div>
        </div>

        <Link to="/forgot-password">Forgot Password?</Link>

      </div>

      <FormButton isLoading={isLoading} text="Login" />

    </form>
  );
}

export default Form;
