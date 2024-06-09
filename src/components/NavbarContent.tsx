interface NavbarContentProps {
  children: React.ReactNode;
}

export default function NavbarContent({ children }: NavbarContentProps) {
  return (
    <ul className="flex flex-row space-x-12 items-center mr-4">
      {children}
    </ul>
  );
}
