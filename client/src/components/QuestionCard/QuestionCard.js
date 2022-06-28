/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import AnswerCard from "../../components/AnswerCard/AnswerCard";
import FeedbackContext from "../../context/FeedbackContext";
import './QuestionCard.css';

export default function QuestionCard() {
  const [values, setValues] = useState({id: 0, question: '', answer: ''});
  const [lastId, setLastId] = useState();
  const {
    userEmail,
    questionList,
    setQuestionList,
  } = useContext(FeedbackContext);

  useEffect(() => {
    const questionListLS = localStorage.getItem("questionList");
    if (questionListLS) {
      setQuestionList(JSON.parse(questionListLS));
      setLastId(JSON.parse(questionListLS).length);
    } else{
      setLastId(0);
    }
  }, []);
  
  const handleValues = (value) => {
    const id = lastId + 1;
    setValues((prevValues) => ({
      ...prevValues,
      id,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClick = () => {
    if(values.question.length > 0){
      setQuestionList((prevQuestionList) => [
        ...prevQuestionList,
        values,
      ]);
      setLastId((prevLastId) => prevLastId + 1);
      setValues({id: 0, question: ''});
    } else{
      alert("Preencha o campo de pergunta");
    }
  }

  useEffect(() => {
    localStorage.setItem("questionList", JSON.stringify(questionList));

  }, [questionList]);

  return (
    <>
      <div className="question_container">
        Bem vindo {userEmail}
        <textarea
        placeholder="Digite sua pergunta" className="form-control question_textarea"
        type="text"
        name="question"
        value={values.question}
        onChange={handleValues}/>
      <button className="btn btn-success w-100" onClick={handleClick}>Enviar</button>
      {
        questionList && questionList.map((e) => (
          <div  className="question_card_container" key={e.id}>
             <AnswerCard object={e} />
          </div>
        ))
      }
      </div>
      </>
  )
}

    
