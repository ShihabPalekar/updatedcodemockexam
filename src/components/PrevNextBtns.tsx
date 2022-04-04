import { Button } from "@mui/material";

type Props = {
  data: any;
  page: number;
  prevQue: any;
  nextQue: any;
};

const PrevNextBtns: React.FC<Props> = ({ ...props }) => {
  return (
    <div>
      <Button disabled={props.page === 0} onClick={props.prevQue}>
        Jump to Prev
      </Button>
      <Button
        disabled={props.page === props.data.length - 1}
        onClick={props.nextQue}
      >
        Jump to Next
      </Button>
    </div>
  );
};

export default PrevNextBtns;
