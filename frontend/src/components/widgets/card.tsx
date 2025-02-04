import { useNavigate } from "react-router-dom";
interface ICardProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  iconComponent?: React.ReactNode;
  link?: string
}

const Card = ({ icon, iconComponent, title, children, link }: ICardProps) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); // Redirect to 
    }
  };

  return (
    <div className={`rounded-lg bg-blue-600 bg-opacity-30  ${link ? "cursor-pointer" : ""}`} onClick={handleClick}>
      <div className="flex items-center mx-4 mt-4">
        {icon &&
          <img src={icon} alt={title} className="w-10 h-10" />}
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