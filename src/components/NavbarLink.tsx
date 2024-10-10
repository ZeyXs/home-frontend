interface NavbarLinkProps {
    name: string;
    onClick: () => void;
};

export default function NavbarLink({ name, onClick }: NavbarLinkProps) {
  return (
    <li>
      <div onClick={onClick} className="font-fira-code text-white cursor-pointer select-none">{name}</div>
    </li>
  );
}

