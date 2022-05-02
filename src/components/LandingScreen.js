import React, { useState } from "react";
import { Wrapper } from "./styles/TestWrapper";
import QuestionsScreen from "./QuestionsScreen";
import { Button } from "./Button";
import wink from "../assets/images/wink.svg";
import arrow from "../assets/images/arrow.svg";

function Test() {
  const [questions, showQuestions] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [points, setPoints] = useState(0);

  const restart = () => {
    showQuestions(true);
    setShowResult(false);
    setPoints(0);
  };

  const result = {
    extrovert:
      "Extroverts tend to be quite outgoing and talkative. They enjoy spending time with other people, and feel energized in social situations. Oftentimes, extroverts like being the focus of attention.",
    introvert:
      "Introverts tend to enjoy solitude and spending quiet time alone. They expend energy in social situations and prefer not to be the center of attention.",
  };

  return (
    <Wrapper>
      {!questions && (
        <div className="main">
          <div className="title">Welcome To Personality Test</div>
          <div className="description">Consits of 5 questions</div>
          <div className="subtitle">
            Answer honestly <img src={wink} alt=""></img>
          </div>

          <Button
            label="Let's start"
            className="start"
            handleClick={() => showQuestions(true)}
            icon={arrow}
          ></Button>
        </div>
      )}

      {!showResult && questions && (
        <QuestionsScreen
          setShowResult={setShowResult}
          points={points}
          setPoints={setPoints}
        ></QuestionsScreen>
      )}

      {showResult && (
        <div className="main">
          <div className="title">Based on result you are more <b>{points >= 0 ? "Introvert" : "Extrovert"}</b></div>
          <div className="description">
              {
                points >= 0  ?  result['introvert'] : result['extrovert']
              }
          </div>
          
          <Button
            label="Try again"
            className="start"
            handleClick={restart}
          ></Button>
        </div>
      )}
    </Wrapper>
  );
}

export default Test;
