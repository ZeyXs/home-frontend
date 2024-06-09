interface NavbarLinkProps {
    name: string;
    href: string;
};

export default function NavbarLink({ name, href }: NavbarLinkProps) {
  return (
    <li>
      <a href={href} className="font-fira-code text-white">{name}</a>
    </li>
  );
}
