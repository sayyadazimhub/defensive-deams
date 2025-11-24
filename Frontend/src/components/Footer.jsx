import { Github, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/routes";

function Footer() {
  return (
    <footer className="footer footer-center rounded bg-white/80 p-10 text-base-content shadow-inner dark:bg-slate-900 dark:text-white">
      <nav className="grid grid-flow-col gap-4 text-sm font-medium">
        <Link to={ROUTE_PATHS.HOME} className="link link-hover">
          Home
        </Link>
        <Link to={ROUTE_PATHS.ABOUT} className="link link-hover">
          About us
        </Link>
        <Link to={ROUTE_PATHS.CONTACT} className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/Azimsyd"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github className="h-6 w-6 text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/azimsyd"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="h-6 w-6 text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/royal.az_/?igsh=bXd2a3V1amNyOWh0"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram profile"
          >
            <InstagramIcon className="h-6 w-6 text-blue-500" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - RoyalOrg Pvt Ltd</p>
      </aside>
    </footer>
  );
}

export default Footer;
