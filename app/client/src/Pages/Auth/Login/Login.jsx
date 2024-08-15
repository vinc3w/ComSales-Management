import Form from './Form';

function Login() {

  return (
    <div id="login" className="auth">

    <div className="bg"></div>

      <div className="form-container">
        <div className="content">

          <div className="title">Login</div>
          <div className="sub-title">Please enter your details</div>

          <Form />

        </div>
      </div>

    </div>
  );
}

export default Login;
