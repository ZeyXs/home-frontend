import { useEffect } from 'react';

import Navbar from '@/components/Navbar';

const PAGE_NAME: string = 'Home – ZeyX.dev';

export default function HomePage() {
  useEffect(() => {
    document.title = PAGE_NAME;
  }, []);

  return (
    <div className="h-screen bg-[#0E0E0E] flex flex-col space-y-2">
      <Navbar />
    </div>
  );
}
