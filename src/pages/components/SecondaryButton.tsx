import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  link: string;
}

const SecondaryButton: React.FC<Props> = ({ children, link }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <button className="hover:underline my-2 text-white" onClick={handleClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
