import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import { TypeQueProps } from "./Question";

const MultiSelect: React.FC<TypeQueProps> = ({ ...props }) => {
  const { data, page, currQue, finishQuiz, queAttempted } = props;
  const [input, setInput] = useState({ userAns: [] });

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setInput({
      ...input,
      userAns: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleSubmit = () => {
    page === data.length - 1
      ? finishQuiz(currQue.id, {
          ...input,
          correct:
            JSON.stringify(input.userAns.sort()) ===
            JSON.stringify(currQue.answer.sort()),
        })
      : queAttempted(currQue.id, {
          ...input,
          correct:
            JSON.stringify(input.userAns.sort()) ===
            JSON.stringify(currQue.answer.sort()),
        });
  };
  return (
    <div>
      <h3>{currQue.que}</h3>
      <ul>
        {currQue.options.map((op: string) => {
          return <li key={op}>{op}</li>;
        })}
      </ul>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Your answer:</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={input.userAns}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
          >
            {currQue.options.map((name: string) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        {page === data.length - 1 ? "Finish Quiz" : "Attempt Que"}
      </Button>
    </div>
  );
};

export default MultiSelect;
