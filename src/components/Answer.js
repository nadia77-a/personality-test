import React, { useState } from "react";
import { Button } from "./Button";

const Answer = (props) => {
  const { setPoints, item, id, setId, setShowResult, quizQuestions } = props;

  const [val, setValue] = useState();

  const changeRadio = (point) => {
    setValue(point);
    setPoints(point);
  };


  return (
    <div>
      {item.answers.map((subitem, i) => {
        return (
          <label key={i}>
            <input
              type="radio"
              value={subitem.point}
              checked={val === subitem.point}
              onChange={() => changeRadio(subitem.point)}
            />
            {subitem.content}
          </label>
        );
      })}

      <div className="buttons">
        {id < quizQuestions.length - 1 && (
          <Button
            label="Next"
            disabled={(id >= quizQuestions.length - 1) || (val=== undefined)}
            handleClick={() => setId(id + 1)}
          ></Button>
        )}

        {id >= quizQuestions.length - 1 && (
          <Button
            label="Finish"
            className="finish"
            disabled={val=== undefined}
            handleClick={() => setShowResult(true)}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default Answer;
