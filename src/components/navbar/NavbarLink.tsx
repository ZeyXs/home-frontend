import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface NavbarLinkProps {
  name: string;
  onClick: () => void;
}

export default function NavbarLink({ name, onClick }: NavbarLinkProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      onClick={onClick}
      className="font-fira-code text-white cursor-pointer select-none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}>
      {name}
      <div className={clsx("border-t-2 border-white transition-all duration-200 ease-in-out", hovered ? "w-full" : "w-0")}></div>
    </motion.div>
  );
}
