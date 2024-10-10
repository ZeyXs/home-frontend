import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "./Navbar";
import NavbarButton from "./NavbarButton";
import NavbarLink from "./NavbarLink";

type DropdownMenuProps = {
  terminalText: string;
  isCursorVisible: boolean;
  navigate: (path: string) => void;
  navLinks: NavLink[];
};

const DropdownMenu = ({ terminalText, isCursorVisible, navigate, navLinks }: DropdownMenuProps) => (
  <div className="lg:hidden fixed top-0 left-0 w-full h-[480px] bg-gradient-to-b from-black to-[#1c1c1c] border-b-2 border-[#cdcdcd] bg-opacity-50">
    <div className="flex flex-col items-center justify-center space-y-10 mt-32 text-white text-xl z-50">
      {navLinks.map((link, index) => (
        <NavbarLink key={index} name={link.name} onClick={() => navigate(link.path)} />
      ))}
      <NavbarButton onClick={() => console.log('Contact button clicked')}>
        <div className="flex flex-row space-x-2 text-white items-center justify-center">
          <div className="font-fira-code text-xl">Blog</div>
          <FaArrowRight size={12} />
        </div>
      </NavbarButton>
    </div>
    <div className="text-[#cdcdcd] absolute bottom-0 p-2">
      <p className="font-fira-code text-sm">
        basile@desktop:~# <span>{terminalText}</span>
        <span className="text-[7px]" style={{ opacity: isCursorVisible ? 0 : 1 }}>▄▄</span>
      </p>
    </div>
  </div>
);

export default DropdownMenu;
