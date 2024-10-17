import { FaArrowRight } from "react-icons/fa";

import { NavLink } from "./Navbar";
import NavbarLink from "./NavbarLink";
import NavbarButton from "./NavbarButton";

type DesktopMenuProps = {
  navigate: (path: string) => void;
  navLinks: NavLink[];
};

const DesktopMenu = ({ navigate, navLinks }: DesktopMenuProps) => (
  <div className="hidden lg:flex lg:flex-row lg:space-x-12 lg:items-center lg:mr-4 z-50">
    {navLinks.map((link, index) => (
      <NavbarLink key={index} name={link.name} onClick={() => navigate(link.path)} />
    ))}
    <NavbarButton onClick={() => navigate('/blog')}>
      <div className="flex flex-row space-x-2 text-white items-center justify-center">
        <div className="font-fira-code text-sm">Blog</div>
        <FaArrowRight size={12} />
      </div>
    </NavbarButton>
  </div>
);

export default DesktopMenu;