import { Cursor } from '@/components/animated/Cursor';
import Navbar from '@/components/navbar/Navbar';
import { useTypewriter } from '@/hooks/useTypewriter';
import { FaSearch } from "react-icons/fa";

import clsx from 'clsx';
import { useState } from 'react';

const titleColors = [
  '#ffaa69',
  '#fffc69',
  '#b4ff69',
  '#6bff69',
  '#69ffbb',
  '#69fff8',
  '#69bbff',
  '#6970ff',
  '#a069ff',
  '#d069ff',
  '#ff69d5',
  '#ff6985',
];

export default function BlogPage() {

  const [typewriterColor, setTypewriterColor] = useState<string>(titleColors[0]);
  const [typewriterText, _] = useTypewriter({
    words: [
      'Cybersécurité',
      'Développement',
      'Architecture',
      'Réseaux',
      'DevOps',
      'Minecraft',
      'Front End',
      'Back End',
      'VPS Hosting',
      'Linux'
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 40,
    delaySpeed: 1400,
    onDeleteFinished: () => {
      const randomColor = titleColors[Math.floor(Math.random() * titleColors.length)];
      setTypewriterColor(randomColor);
    }
  });

  return (
    <div className="h-full bg-[#202020]">
      <div className="absolute w-full">
        <Navbar />
      </div>

      {/* Title */}
      <div className="w-full h-[400px] bg-[#0e0e0e]">
        <div className="h-full flex items-center cursor-default select-none">
          <h1 className="text-white text-5xl font-poppins font-semibold ml-[30%] mt-14 flex flex-row items-center">
            <p>ZeyX.Blog(</p>
            <div style={{ color: typewriterColor }}>{typewriterText}</div>
            <Cursor cursorColor={typewriterColor} />
            <p>);</p>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col px-[15%]'>
        <div className='h-[60px]'></div>
        <div className='flex flex-row w-full h-full space-x-10'>

          {/* Sidebar */}
          <div className='h-[800px] w-[500px] bg-[#0e0e0e] rounded-lg p-5'>
            <p className='text-[#dfdfdf] font-poppins text-xl font-bold hover:bg-white hover:bg-opacity-10 rounded-xl cursor-pointer p-2 pl-3'>Tous les articles</p>
          </div>

          {/* Search */}
          <div className='flex flex-col space-y-4 p-8 h-full w-full bg-[#0e0e0e] rounded-lg'>
            <p className='text-[#dfdfdf] font-bold text-4xl font-poppins'>À la recherche d'un article spécifique ?</p>

            <p className='text-[#b4b4b4] font-poppins pt-12'>Vous trouverez ici tous les tutoriels et articles que j'ai rédigés au cours de mes années d'aventures dans le domaine de l'informatique.</p>

            <div className="relative w-[80%]">
              <div className="absolute inset-y-0 start-0 flex items-center px-5 pointer-events-none">
                  <FaSearch color="#b4b4b4" size={22} />
              </div>
              <input type="search" className="block w-full p-4 ps-14 text-lg text-[#dfdfdf] font-fira-code border border-[#4b4b4b] rounded-lg bg-[#202020] focus:ring-[#4b4b4b] focus:border-[#4b4b4b] search-cancel:appearance-none" placeholder="Rechercher un article..." required />
            </div>

            <p className='text-[#b4b4b4] font-poppins text-sm'>Pour ajouter un <span className='underline'>tag</span> à votre recherche, écrivez une catégorie entouré de <span className='font-fira-code'>[]</span>.</p>

          </div>
        </div>
        <div className='h-[60px]'></div>
      </div>


    </div>
  );
}
