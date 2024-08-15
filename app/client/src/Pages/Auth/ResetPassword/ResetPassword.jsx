import Form from './Form';

function ResetPassword() {

  return (
    <div id="reset-password" className="auth">

      <div className="bg"></div>

      <div className="form-container">
        <div className="content">

          <div className="title">Reset Password</div>
          <div className="sub-title">Enter your new password</div>

          <Form />

        </div>
      </div>

    </div>
  );
}

export default ResetPassword;
