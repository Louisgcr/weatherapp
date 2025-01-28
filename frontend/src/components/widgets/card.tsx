
interface ICardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const Card = ({ icon, title, children }: ICardProps) => {
  return (
    <div className="rounded-lg bg-blue-600 bg-opacity-30">
      <div className="flex items-center mx-4 mt-4">
        <img src={icon} alt={title} className="w-10 h-10" />
        <h2 className="text-slate-200">{title}</h2>
      </div>
      {children}
    </div>
  )
};
export default Card;