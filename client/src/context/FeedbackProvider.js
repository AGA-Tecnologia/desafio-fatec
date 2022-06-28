import PropTypes from 'prop-types';
import { useState } from 'react';
import FeedbackContext from './FeedbackContext';

function FeedbackProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  const context = {
    userEmail,
    setUserEmail,
    password,
    setPassword,
    loading,
    setLoading,
    isButtonDisabled,
    setIsButtonDisabled,
    questionList, 
    setQuestionList,
  };

  return (

    <FeedbackContext.Provider value={ context }>
      {children}
    </FeedbackContext.Provider>
  );
}

FeedbackProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default FeedbackProvider;
