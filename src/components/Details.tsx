import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";

type Props = {
  navigate: any;
  setDetails: any;
};

const initVals = {
  name: "",
  gender: "",
  language: "",
};

const Details: React.FC<Props> = ({ ...props }) => {
  const [vals, setVals] = useState(initVals);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setVals({ ...vals, [name]: value });
  };

  const startQuiz = () => {
    props.setDetails(vals);
    props.navigate("quiz");
  };

  const btnVisibility = () => {
    if (vals.name === "" || vals.gender === "" || vals.language === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div>
        <TextField
          variant="standard"
          name="name"
          value={vals.name}
          onChange={handleChange}
          label="Your name"
        />
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            value={vals.gender}
            name="gender"
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Language</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            row
            value={vals.language}
            name="language"
            onChange={handleChange}
          >
            <FormControlLabel
              value="english"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel value="hindi" control={<Radio />} label="Hindi" />
            <FormControlLabel
              value="spanish"
              control={<Radio />}
              label="Spanish"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Button
        variant="contained"
        onClick={startQuiz}
        disabled={btnVisibility()}
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default Details;
