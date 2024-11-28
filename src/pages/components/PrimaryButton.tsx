import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  link: string;
}

const PrimaryButton: React.FC<Props> = ({ children, link }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };
  return (
    <button
      className=" text-white font-extrabold hover:outline my-2"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
