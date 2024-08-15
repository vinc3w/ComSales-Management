import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

import Input from "../../../Components/Input";
import FormButton from "../../../Components/FormButton";
import getURLParams from "../../../utils/getURLParams";

function Form() {

  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async e => { 
    try {

      e.preventDefault();
      
      if (isLoading) return;
      setErrorMessage('');
      setIsLoading(true);

      const formData = Object.fromEntries(new FormData(e.target));
      formData.auth = getURLParams('auth');
      await axios.post(`${SERVER_URL}/auth/reset-password`, formData);

      setIsLoading(false);
      setSuccessMessage('Password changed! Redirecting to login page in 5 seconds');
      setTimeout(() => navigate('/login', { replace: true }), 5000);
      
    } catch (error) {

      setIsLoading(false);
      setErrorMessage(error.response?.data.error || error.message);
      
    }
  }

  return (
    <form onSubmit={login} autoComplete="off">

      <div className="success-message">{ successMessage }</div>
      <div className="error-message">{ errorMessage }</div>
      <Input label="Password" name="password" type="password" />
      <Input label="Confirm Password" name="confirm" type="password" />

      <FormButton isLoading={isLoading} text="Reset Password" />

      <Link to="/login" className="back">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>back to login</span>
      </Link>

    </form>
  );
}

export default Form;
