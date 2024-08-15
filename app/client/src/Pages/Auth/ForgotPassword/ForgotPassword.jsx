import Form from './Form';

function ForgotPassword() {

  return (
    <div id="get-password-reset-code" className="auth">

      <div className="bg"></div>

      <div className="form-container">
        <div className="content">

          <div className="title">Forgot Password</div>
          <div className="sub-title">Please enter the email address you used to register with and we will send you a password reset code</div>

          <Form />

        </div>
      </div>

    </div>
  );
}

export default ForgotPassword;
