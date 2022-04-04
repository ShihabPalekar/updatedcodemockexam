import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { useState } from "react";
import { TypeQueProps } from "./Question";

const TrueFalse: React.FC<TypeQueProps> = ({ ...props }) => {
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
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Option</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            onChange={handleChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="True" />
            <FormControlLabel value="false" control={<Radio />} label="False" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        {page === data.length - 1 ? "Finish Quiz" : "Attempt Que"}
      </Button>
    </div>
  );
};
export default TrueFalse;
