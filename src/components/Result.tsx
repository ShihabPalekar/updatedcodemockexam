import { Box } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  data: any;
};

const Result: React.FC<Props> = ({ ...props }) => {
  const { data } = props;
  const total = data.length;
  const [loading, setLoading] = useState(true);
  const [userMarks, setUserMarks] = useState(0);

  useEffect(() => {
    const filtered = data.filter((i: any) => i.ansInput.correct === true);
    setUserMarks(filtered.length);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Calculating result...</p>;
  }

  return (
    <div>
      <div>
        <h3>
          Your total score is {userMarks} out of {}total.
        </h3>
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: `conic-gradient(green ${
              (userMarks / total) * 100
            }%, red 0)`,
          }}
        ></Box>
      </div>
      <div>
        {data.map((i: any, index: number) => {
          if (i.type === "multi-select") {
            return (
              <div key={index}>
                <p>{index + 1}. </p>
                <p>
                  Your answer: {JSON.stringify(i.ansInput.userAns, null, 2)}
                </p>
                <p>Correct answer: {JSON.stringify(i.answer, null, 2)}</p>
              </div>
            );
          } else if (i.type === "match-up") {
            return (
              <div key={index}>
                <p>{index + 1}. </p>
                <p>
                  Your answer: {JSON.stringify(i.ansInput.userAns, null, 2)}
                </p>
                <p>
                  Correct answer: {JSON.stringify(i.ansInput.answer, null, 2)}
                </p>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <p>{index + 1}. </p>
                <p>Your answer: {i.ansInput.userAns}</p>
                <p>Correct answer: {i.answer}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Result;
