import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { TypeQueProps } from "./Question";

const FillUp: React.FC<TypeQueProps> = ({ ...props }) => {
  const { data, page, currQue, finishQuiz, queAttempted } = props;
  const [input, setInput] = useState({ userAns: "" });

  const handleChange = (e: any) => {
    setInput({ ...input, userAns: e.target.value.toLowerCase() });
  };

  const handleSubmit = () => {
    page === data.length - 1
      ? finishQuiz(currQue.id, {
          ...input,
          correct: input.userAns === currQue.answer,
        })
      : queAttempted(currQue.id, {
          ...input,
          correct: input.userAns === currQue.answer,
        });
  };

  return (
    <div>
      <h3>{currQue.que}</h3>
      <div>
        <TextField variant="standard" onChange={handleChange} />
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        {page === data.length - 1 ? "Finish Quiz" : "Attempt Que"}
      </Button>
    </div>
  );
};

export default FillUp;
