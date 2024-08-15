import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../../config.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

import Input from "../../../Components/Input";
import FormButton from "../../../Components/FormButton";

function Form() {

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
      await axios.post(`${SERVER_URL}/auth/forgot-password`, formData);

      setIsLoading(false);
      setSuccessMessage('Password reset link sent');
      
    } catch (error) {

      setIsLoading(false);
      setErrorMessage(error.response?.data.error || error.message);
      
    }
  }

  return (
    <form onSubmit={login} autoComplete="off">

      <div className="success-message">{ successMessage }</div>
      <div className="error-message">{ errorMessage }</div>
      <Input label="Email" name="email" />

      <FormButton isLoading={isLoading} text="Request Reset Link" />

      <Link to="/login" className="back">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>back</span>
      </Link>

    </form>
  );
}

export default Form;
