import Link from "next/link";
import { clsx } from "clsx";
import { useRouter } from "next/router";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Nesting",
    path: "/nesting",
  },
  {
    title: "Nesting 3 Challange",
    path: "/nesting-challenge-3",
  },
  {
    title: "Image",
    path: "/image",
  },
  {
    title: "Variables",
    path: "/variables",
  },
  {
    title: "Variables Cases",
    path: "/variables-use-cases",
  },
  {
    title: "Color functions 2",
    path: "/color-func",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <h1>Header goes here</h1>
      <nav className="primary-navigation" aria-label="Primary">
        <ul className="primary-navigation__list">
          {navLinks.map((link, index) => (
            <li key={index} className="primary-navigation__item">
              <Link
                href={link.path}
                className={clsx(
                  "primary-navigation__link",
                  router.pathname === link.path && "underline"
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
