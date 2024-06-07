import { useEffect } from "react";

const PAGE_NAME: string = "Home – ZeyX.dev"

export default function HomePage() {

  useEffect(() => {
    document.title = PAGE_NAME;
  }, []);

  return (
    <div>Home</div>
  );
}