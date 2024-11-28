type Props = {
  length?: number;
};

const LineBreak: React.FC<Props> = ({ length = 4 }) => {
  return <div className={`mt-${length}`}></div>;
};

export default LineBreak;
