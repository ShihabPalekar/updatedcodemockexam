import { Button } from "@mui/material";

type Props = {
  page: number;
  data: any;
  setPage: any;
};

const CustomPagination: React.FC<Props> = ({ ...props }) => {
  const handleChange = (e: any) => {
    props.setPage(Number(e.target.innerText) - 1);
  };
  return (
    <div>
      {props.data.map((i: any, index: number) => {
        return (
          <Button key={index+1} variant="outlined" onClick={handleChange}>
            {index + 1}
          </Button>
        );
      })}
    </div>
  );
};

export default CustomPagination;
