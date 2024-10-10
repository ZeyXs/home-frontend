import Logo from '../Logo';
import NavbarButton from './NavbarButton';
import NavbarContent from './NavbarContent';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { useTypewriter } from "react-simple-typewriter";
import DesktopMenu from './DesktopMenu';
import DropdownMenu from './DropdownMenu';

// Définition des types pour les liens de navigation
export type NavLink = {
  name: string;
  path: string;
};

export default function Navbar() {
  const [isDropdownNavToggled, setDropdownNavToggled] = useState<boolean>(false);
  const [isCursorVisible, setCursorVisible] = useState<boolean>(true);
  const [isShortLogo, setIsShortLogo] = useState<boolean>(false);

  const navigate = useNavigate();
  const [terminalText, _] = useTypewriter({
    words: [":(){ :|:& };:", "sudo rm -rf /*", "aptitude -v moo", "alias please='sudo'", "make love not war", "cowsay 'Moew!'", "echo 'don't nod' | rev"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 495
  });

  // Liste des liens de navigation avec un typage clair
  const navLinks: NavLink[] = [
    { name: "> mes-projets", path: "/" },
    { name: "> mes-compétences", path: "/" },
    { name: "> mes-expériences", path: "/" }
  ];

  const handleDropdownNav = () => {
    setDropdownNavToggled(!isDropdownNavToggled);
  };

  const handleResize = () => {
    setIsShortLogo(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDropdownNavToggled) {
      const interval = setInterval(() => setCursorVisible(prev => !prev), 500);
      return () => clearInterval(interval);
    }
  }, [isDropdownNavToggled]);

  return (
    <nav className="flex flex-row items-center justify-between p-4">
      <div className="z-50">
        <Logo onClick={() => navigate('/')} scale="90" short={isShortLogo} />
      </div>

      <NavbarContent>
        {/* Menu pour mobile */}
        <div className="flex lg:hidden z-50">
          <NavbarButton onClick={handleDropdownNav}>
            {isDropdownNavToggled ? <IoClose size={30} /> : <IoMenu size={30} />}
          </NavbarButton>
        </div>

        {/* Menu pour desktop */}
        <DesktopMenu navigate={navigate} navLinks={navLinks} />
      </NavbarContent>

      {/* Dropdown menu pour mobile */}
      {isDropdownNavToggled && (
        <DropdownMenu 
          terminalText={terminalText}
          isCursorVisible={isCursorVisible}
          navigate={navigate}
          navLinks={navLinks}
        />
      )}
    </nav>
  );
}
