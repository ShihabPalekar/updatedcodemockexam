import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Details from "./components/Details";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App: React.FC = () => {
  const [details, setDetails]: any = useState({ language: "english" });
  const [data, setData]: any = useState([]);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Details navigate={navigate} setDetails={setDetails} />}
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              navigate={navigate}
              language={details.language}
              data={data}
              setData={setData}
            />
          }
        />
        <Route path="/result" element={<Result data={data}/>} />
      </Routes>
    </div>
  );
};

export default App;
