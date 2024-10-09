import { FaArrowRight } from "react-icons/fa";

import Logo from '../Logo';
import NavbarButton from './NavbarButton';
import NavbarContent from './NavbarContent';
import NavbarLink from './NavbarLink';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";


export default function Navbar() {

  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    console.log("coucou");
    setNav(!nav);
  }

  return (
    <nav className="flex flex-row items-center justify-between p-4">
      
      <div className="scale-90">
        <Logo onClick={() => navigate('/')} />
      </div>

      <NavbarContent>

        <div className="flex lg:hidden">
          <NavbarButton onClick={handleNav}>
            <IoMenu size={30} />
          </NavbarButton>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:space-x-12 lg:items-center lg:mr-4">
          <NavbarLink name="> mes-projets" onClick={() => navigate('/')} />
          <NavbarLink name="> mes-compétences" onClick={() => navigate('/')} />
          <NavbarLink name="> mes-expériences" onClick={() => navigate('/')} />
          <NavbarButton onClick={() => console.log('Contact button clicked')}>
            <div className="flex flex-row space-x-2 text-white items-center justify-center">
              <div className="font-fira-code text-sm">Blog</div>
              <div><FaArrowRight size={12} /></div>
            </div>
          </NavbarButton>
        </div>

      </NavbarContent>
    </nav>
  );
}
