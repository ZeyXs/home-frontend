import { FaArrowRight } from "react-icons/fa";

import Logo from '../Logo';
import NavbarButton from './NavbarButton';
import NavbarContent from './NavbarContent';
import NavbarLink from './NavbarLink';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

export default function Navbar() {

  const [isDropdownNavToggled, setDropdownNavToggled] = useState(false);
  const [isCursorVisible, setCursorVisible] = useState(true)
  const [isShortLogo, setIsShortLogo] = useState(false);

  const navigate = useNavigate();
  const [terminalText, _] = useTypewriter({
    words: [":(){ :|:& };:", "sudo rm -rf /*", "aptitude -v moo", "alias istg='sudo'", "make love not war", "cowsay 'Moew!'", "echo 'don't nod' | rev"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 495
  });

  const handleDropdownNav = () => {
    setDropdownNavToggled(!isDropdownNavToggled);
  }

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsShortLogo(true);
    } else {
      setIsShortLogo(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDropdownNavToggled) {
      const interval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isDropdownNavToggled]);

  return (
    <nav className="flex flex-row items-center justify-between p-4">
      
      <div className="z-50">
        <Logo onClick={() => navigate('/')} scale="90" short={isShortLogo} />
      </div>

      <NavbarContent>

        <div className="flex lg:hidden z-50">
          <NavbarButton onClick={handleDropdownNav}>
            {isDropdownNavToggled ? <IoClose size={30} /> : <IoMenu size={30} />}
          </NavbarButton>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:space-x-12 lg:items-center lg:mr-4 z-50">
          <NavbarLink name="> mes-projets" onClick={() => navigate('/')} />
          <NavbarLink name="> mes-compétences" onClick={() => navigate('/')} />
          <NavbarLink name="> mes-expériences" onClick={() => navigate('/')} />
          <NavbarButton onClick={() => console.log('Contact button clicked')}>
            <div className="flex flex-row space-x-2 text-white items-center justify-center">
              <div className="font-fira-code text-sm">Blog</div>
              <FaArrowRight size={12} />
            </div>
          </NavbarButton>
        </div>

      </NavbarContent>

      {isDropdownNavToggled && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-[450px] bg-gradient-to-b from-black to-[#1c1c1c] border-b-2 border-[#cdcdcd] bg-opacity-50">
          <div className="text-[#cdcdcd] absolute bottom-0 p-2">
            <p className="font-fira-code text-sm">
              basile@desktop:~# <span>{terminalText}</span>
              <span className="text-[7px]" style={{ opacity: isCursorVisible ? 0 : 1 }}>▄▄</span>
            </p>
          </div>
        </div>
      )}
      
    </nav>
  );
}
