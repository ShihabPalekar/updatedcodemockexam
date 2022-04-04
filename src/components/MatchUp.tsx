import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { TypeQueProps } from "./Question";

const MatchUp: React.FC<TypeQueProps> = ({ ...props }) => {
  const { data, page, currQue, finishQuiz, queAttempted } = props;
  const [input, setInput] = useState(currQue.colA);

  const handleChange = (id: any) => (event: any) => {
    setInput((prevData: any) =>
      prevData.map((i: any) =>
        i.id === id
          ? {
              ...i,
              userInput:
                currQue.colB[
                  event.target.value.toLowerCase().charCodeAt(0) - 97
                ],
            }
          : i
      )
    );
  };

  console.log(input);

  const handleSubmit = () => {
    page === data.length - 1
      ? finishQuiz(currQue.id, {
          userAns: input.map((i: any) => i.userInput),
          answer: input.map((i: any) => i.answer),
          correct: input.userAns === input.answer,
        })
      : queAttempted(currQue.id, {
          userAns: input.map((i: any) => i.userInput),
          answer: input.map((i: any) => i.answer),
          correct: input.userAns === input.answer,
        });
  };

  return (
    <div>
      <h3>{currQue.que}</h3>
      <div>
        <div>
          <p>Column A</p>
          {currQue.colA.map((op: any, index: number) => {
            return (
              <p key={index + 1}>
                <span>{index + 1}. </span>
                <span>{op.opt}</span>
              </p>
            );
          })}
        </div>
        <div>
          <p>Column B</p>
          {currQue.colB.map((op: string, index: number) => {
            return (
              <p key={index + 1}>
                <span>{String.fromCharCode(index + 65)}. </span>
                <span>{op}</span>
              </p>
            );
          })}
        </div>
      </div>
      <div>
        <p>Your answers:</p>
        {currQue.colA.map((op: any, index: number) => {
          return (
            <div key={index + 1}>
              <span>{index + 1}. </span>
              <TextField
                onChange={handleChange(op.id)}
                variant="standard"
                inputProps={{ maxLength: 1 }}
              />
            </div>
          );
        })}
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        {page === data.length - 1 ? "Finish Quiz" : "Attempt Que"}
      </Button>
    </div>
  );
};

export default MatchUp;
