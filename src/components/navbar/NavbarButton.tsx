interface NavbarButtonProps {
  children: React.ReactNode;
  onClick: () => void;
};

export default function NavbarButton({ children, onClick }: NavbarButtonProps) {
  return (
    <button className="text-white border-white border hover:bg-white hover:bg-opacity-10 ease-in-out transition rounded-lg py-2 px-3" onClick={onClick}>
      {children}
    </button>
  );
}
