import React from "react";
import { useState } from "react";

//   {
//     "QuestionID": 1,
//     "Description": "What is the capital of India",
//     "Options": ["Delhi", "Surat", "Calcutta", "Banglore"],
//     "Answer": "Delhi"
//   },

export const Question = ({ setQue, Question }) => {
  const [Ans, setAns] = useState();
  console.log(Ans);
  return (
    <div className="Question">
      <h2>
        Q{Question.QuestionID}. {Question.Description} ?
      </h2>
      {Question.Options.map((Option) => {
        return (
          <div className="Options">
            <input
              onChange={(e) => setAns(e.target.value)}
              type="radio"
              name={"Q" + Question.QuestionID}
              value={Option}
            />
            <label>{Option}</label>
          </div>
        );
      })}
    </div>
  );
};
