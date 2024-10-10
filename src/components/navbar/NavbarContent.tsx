interface NavbarContentProps {
  children: React.ReactNode;
}

export default function NavbarContent({ children }: NavbarContentProps) {
  return (
    <ul className="flex flex-row items-center">
      {children}
    </ul>
  );
}
