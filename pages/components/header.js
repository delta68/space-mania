import Image from "next/image";
import Link from "next/dist/client/link";
import Logo from "./logo";
import Script from "next/dist/client/script";

export default function Header() {
  return (
    <>
      <Script type="text/javascript" src="/static/script.js"></Script>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <Logo />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/pod">
              <a className="navbar-item">Picture of the day</a>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <Link href="/earthImages">
                  <a className="navbar-item">Images of Earth</a>
                </Link>
                <Link href="/asteroidTable">
                  <a className="navbar-item">Asteroids</a>
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
