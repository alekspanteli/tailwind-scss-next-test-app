import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>Header goes here</h1>
      <nav className="primary-navigation" aria-label="Primary">
        <ul className="primary-navigation__list">
          <li className="primary-navigation__item">
            <Link href="/" className="primary-navigation__link">
              Home
            </Link>
          </li>
          <li className="primary-navigation__item">
            <Link href="/about" className="primary-navigation__link">
              About
            </Link>
          </li>
          <li className="primary-navigation__item">
            <Link href="/about" className="primary-navigation__link">
              Nesting
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
