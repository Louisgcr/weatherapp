import { useBackground } from "context/BackgroundColorContext";
import { useNavigate } from "react-router-dom";
interface ICardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconComponent?: React.ReactNode;
  link?: string
}

const Card = ({ icon, iconComponent, title, children, link }: ICardProps) => {

  const navigate = useNavigate();
  const { backgroundColor } = useBackground();
  const handleClick = () => {
    if (link) {
      navigate(link); // Redirect to 
    }
  };

  return (
    <div className={`rounded-lg ${backgroundColor}  ${link ? "cursor-pointer" : ""}`} onClick={handleClick}>
      <div className="flex items-center px-4 pt-2">
        {icon}
        {iconComponent}
        <h2 className="text-slate-200">{title}</h2>
      </div>
      <div className="flex h-40">
        {children}
      </div>
    </div>
  )
};
export default Card;