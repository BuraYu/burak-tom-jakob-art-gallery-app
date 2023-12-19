import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul className="nav-container">
        <li className="nav-li-element">
          <Link href="/">Spotlight</Link>
        </li>
        <li className="nav-li-element">
          <Link href="/art-pieces">Pieces</Link>
        </li>
        <li className="nav-li-element">
          <Link className="nav-li-link" href="/favorites">
            FavoUrite
          </Link>
        </li>
      </ul>
    </>
  );
}
