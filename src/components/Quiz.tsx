import { useEffect, useState } from "react";
import { dataEnglish, dataHindi, dataSpanish } from "../mockData";
import CustomPagination from "./CustomPagination";
import PrevNextBtns from "./PrevNextBtns";
import Question from "./Question";

type Props = {
  data: any;
  setData: any;
  language: string;
  navigate: any;
};

const Quiz: React.FC<Props> = ({ ...props }) => {
  const { data, setData, language, navigate } = props;
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (language === "english") {
      setData(dataEnglish);
    } else if (language === "hindi") {
      setData(dataHindi);
    } else if (language === "spanish") {
      setData(dataSpanish);
    }
  }, []);

  const prevQue = () => {
    setPage((prevPage: any) => prevPage - 1);
  };

  const nextQue = () => {
    setPage((prevPage: any) => prevPage + 1);
  };

  const queAttempted = (qid: number, ans: any) => {
    setData((prevData: any) =>
      prevData.map((d: any) => (d.id === qid ? { ...d, ansInput: ans } : d))
    );
    nextQue();
  };

  const finishQuiz = (qid: number, ans: any) => {
    queAttempted(qid, ans);
    navigate("/result");
  };

  console.log(data);

  return (
    <div>
      {data[page] !== undefined && (
        <>
          <CustomPagination data={data} page={page} setPage={setPage} />
          <Question
            data={data}
            page={page}
            currQue={data[page]}
            queAttempted={queAttempted}
            finishQuiz={finishQuiz}
          />
          <PrevNextBtns
            data={data}
            page={page}
            prevQue={prevQue}
            nextQue={nextQue}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
