import React from "react";
import { useState } from "react";
import { Question } from "../Components/Question";
import Data from "../Data.json";

//   {
//     "QuestionID": 1,
//     "Description": "What is the capital of India",
//     "Options": ["Delhi", "Surat", "Calcutta", "Banglore"],
//     "Answer": "Delhi"
//   },

export const Exam = () => {
  const [ShowQuestion, setQuestion] = useState(1);
  return (
    <div className="Exam">
      {Data.map((Que) => {
        return (
          <div key={Que.QuestionID}>
            {Que.QuestionID == ShowQuestion ? (
              <Question setQuestion={setQuestion} Question={Que} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
