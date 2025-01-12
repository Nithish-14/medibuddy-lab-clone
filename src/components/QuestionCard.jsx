import React from 'react'

const QuestionCard = ({questionDetail, visible, updateVisible}) => {
  const {id, question, answer, icon, points} = questionDetail;

//   const [visible, updateVisible] = useState(false);

  return (
     <li className="question-card">
        <div className="question-container">
            <img src={`https://medibuddy.in/${icon}`} alt="image" className="question-image" />
            <button type="button" className="answer-button" onClick={() => updateVisible(visible === id ? 0 : id)}><p className="question-para">{question}</p></button>
        </div>
        <div className={`answer-container ${visible ===  id ? "" : "hide"}`}>
            {answer && <p className="answer-para">{answer}</p>}
            <ul className="points-container">
                {points.map((each, index) => <li key={index} className="answer-point">{each.pnt}</li>)}
            </ul>
        </div>
     </li>
  )
}

export default QuestionCard