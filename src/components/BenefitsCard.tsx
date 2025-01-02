"use client";
import { motion } from "framer-motion";
interface BenefitsCardProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
}

const BenefitsCard = ({ title, description, ...props }: BenefitsCardProps) => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        show: {
          scale: [1, 1.1, 1],
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        },
      }}
      className={`p-[3rem] rounded-3xl ${props.className}`}
    >
      <h3 className="text-neutral-950 text-3xl font-bold mb-2">{title}</h3>
      <div className="text-neutral-900 text-lg">{description}</div>
    </motion.div>
  );
};

export default BenefitsCard;
