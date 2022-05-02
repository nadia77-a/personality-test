import React, { useState } from "react";
import Answer from "./Answer";
import quizQuestions from "../mocks/quizQuestions.js";

function QuestionsScreen(props) {
  const { setShowResult, setPoints } = props;
  const [id, setId] = useState(0);

  return (
    <div className="questions">
      {quizQuestions
        .filter((item, i) => i === id)
        .map((item) => {
          return (
            <div key={id} className="singleQuestion">
              <div className="question">
                {id + 1}. {item.question}
              </div>
              <Answer
                key={id}
                item={item}
                setPoints={setPoints}
                id={id}
                setId={setId}
                setShowResult={setShowResult}
                quizQuestions={quizQuestions}
              ></Answer>
            </div>
          );
        })}
    </div>
  );
}

export default QuestionsScreen;
