import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import './Admin.css';

function Admin() {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const {
    isButtonDisabled,
    setIsButtonDisabled
  } = useContext(FeedbackContext);

  const handleEmail = ({ target: { value } }) => {
    setNewEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setNewPassword(value);
  };

  const handleClick = () => {
    
  };

  useEffect(() => {
    const validateButton = async () => {
      const minPasswordLength = 6;
      const emailFormatRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (newPassword.length > minPasswordLength && newEmail.match(emailFormatRegex)) {
        await setIsButtonDisabled(false);
      } else {
        await setIsButtonDisabled(true);
      }
    };
    validateButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newEmail, newPassword]);

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
            value={ newEmail }
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
            type="newPassword"
            name="newPassword"
            placeholder="Senha"
            value={ newPassword }
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

export default Admin;
