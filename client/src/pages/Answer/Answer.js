/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import AnswerCard from "../../components/AnswerCard/AnswerCard";
import FeedbackContext from "../../context/FeedbackContext";
import "./Answer.css";

export default function Answer() {
  const [values, setValues] = useState();
  const [loading, setLoading] = useState(false);
  const {
    questionList,
    setQuestionList,} = useContext(FeedbackContext);

  useEffect(() => {
    const questionListLS = localStorage.getItem("questionList");
    if (questionListLS) {
      setQuestionList(JSON.parse(questionListLS));
    }
  }, []);

  const handleValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClick = async ({target}) => {
    if(values.answer.length > 0){
    setLoading(true);
    const id = target.id;
    const question = questionList.find((e) => e.id === +id);
    question.answer = values.answer;
    const newQuestionList = await questionList.filter((e) => e.id !== +id);
    await setQuestionList([...newQuestionList, question]);
    setValues({answer: ''})
    setLoading(false);
    } else{
      alert("Preencha o campo de resposta");
    }
  }

  useEffect(() => {
    localStorage.setItem("questionList", JSON.stringify(questionList));

  }, [questionList]);

  return (
    <div>
      {!loading && questionList.map((e) => 
        <div className="answer_container">
          <AnswerCard key={e.id} object={e} />
          {
            !e.answer && 
            <>
              <textarea
              placeholder="Digite a resposta" className="form-control"
              type="text"
              name="answer"
              onChange={handleValues}/>
              <button id={e.id} type="button" className="btn btn-success w-100" onClick={handleClick}>Responder</button>
            </>
          }
        </div>
      )}
    </div>
  )
}
