interface BenefitsCardProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
}

const BenefitsCard = ({ title, description, ...props }: BenefitsCardProps) => {
  return (
    <div className={`p-[3rem] rounded-3xl ${props.className}`}>
      <h3 className="text-neutral-950 text-3xl font-bold mb-2">{title}</h3>
      <div className="text-neutral-900 text-lg">{description}</div>
    </div>
  );
};

export default BenefitsCard;
