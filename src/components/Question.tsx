import FillUp from "./FillUp";
import MatchUp from "./MatchUp";
import MCQ from "./MCQ";
import MultiSelect from "./MultiSelect";
import TrueFalse from "./TrueFalse";

export type TypeQueProps = {
  data: any;
  page: number;
  currQue: any;
  queAttempted: any;
  finishQuiz: any;
};

const Question: React.FC<TypeQueProps> = ({ ...props }) => {
  switch (props.currQue.type) {
    case "fill-up": {
      return <FillUp {...props} />;
    }
    case "mcq": {
      return <MCQ {...props} />;
    }
    case "boolean": {
      return <TrueFalse {...props} />;
    }
    case "match-up": {
      return <MatchUp {...props} />;
    }
    case "multi-select": {
      return <MultiSelect {...props} />;
    }
    default: {
      return <div></div>;
    }
  }
};

export default Question;
