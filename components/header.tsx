import Link from "next/link";
import { clsx } from "clsx";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <h1>Header goes here</h1>
      <nav className="primary-navigation" aria-label="Primary">
        <ul className="primary-navigation__list">
          <li className="primary-navigation__item">
            <Link
              href="/"
              className={clsx(
                "primary-navigation__link",
                router.pathname == "/" ? "underline" : ""
              )}
            >
              Home
            </Link>
          </li>
          <li className="primary-navigation__item">
            <Link
              href="/about"
              className={clsx(
                "primary-navigation__link",
                router.pathname == "/about" ? "underline" : ""
              )}
            >
              About
            </Link>
          </li>
          <li className="primary-navigation__item">
            <Link
              href="/nesting"
              className={clsx(
                "primary-navigation__link",
                router.pathname == "/nesting" ? "underline" : ""
              )}
            >
              Nesting
            </Link>
          </li>
          <li className="primary-navigation__item">
            <Link
              href="/nesting-challenge-3"
              className={clsx(
                "primary-navigation__link",
                router.pathname == "/nesting-challenge-3" ? "underline" : ""
              )}
            >
              Nesting 3 Challange
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
