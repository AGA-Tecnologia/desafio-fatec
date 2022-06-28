import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackContext from '../../context/FeedbackContext';
import './LoginCard.css';

function LoginCard() {
  const navigate = useNavigate();
  const {
    userEmail,
    setUserEmail,
    password,
    setPassword,
    setLoading,
    isButtonDisabled,
    setIsButtonDisabled
  } = useContext(FeedbackContext);

  const handleEmail = ({ target: { value } }) => {
    setUserEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
    setLoading(true);
    if(userEmail === 'admin@agatecnologia.com'){
      navigate('/question');
    } else{
      navigate('/answer');
    }
  };

  useEffect(() => {
    const validateButton = async () => {
      const minPasswordLength = 6;
      const emailFormatRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (password.length > minPasswordLength && userEmail.match(emailFormatRegex)) {
        await setIsButtonDisabled(false);
      } else {
        await setIsButtonDisabled(true);
      }
    };
    validateButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail, password]);

  return (
    <div className="login_container">
      <img
        className="login_image"
        src={require('../../imgs/logo.png')}
        alt="logo app"
      />
      <form className="input_container">
        <div className='form-floating h-50 mb-3'>
          <input
            className="email_input form-control"
            id="floatingInput"
            type="email"
            name="email"
            placeholder="name@example.com"
            value={ userEmail }
            onChange={ (event) => handleEmail(event) }
          />
          <label className="email_label" for="floatingInput">
            Email address
          </label>
        </div>
        <div className='form-floating h-50 mb-3'>
          <input
            className="password_input form-control"
            id="floatingPassword"
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ (event) => handlePassword(event) }
          />
          <label className="password_label" for="floatingPassword">
            Password
          </label>
        </div>
        <button
          className="login_button btn btn-primary"
          disabled={ isButtonDisabled }
          type="button"
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginCard;
