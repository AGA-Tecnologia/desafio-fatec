import './AnswerCard.css';

export default function AnswerCard(props) {
  return (
    <div className="answer_card card">
      <div className='question card-header'>{props.object.question}</div>
      {
        props.object.answer && <div className='answer card-body'>{props.object.answer}</div>
      }
    </div>
  )
}
