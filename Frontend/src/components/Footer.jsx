import React from "react";
import { FacebookIcon, Github, GithubIcon, InstagramIcon, LinkedinIcon, Mail } from "lucide-react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">Home</a>
          <a href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/Azimsyd" target="_blank">
              <Github className="h-6 w-6 text-blue-500" />          
            </a>
            <a href="https://www.linkedin.com/in/azimsyd" target="_blank">
              <LinkedinIcon className="h-6 w-6 text-blue-500" />          
            </a> 
            <a href="https://www.instagram.com/royal.az_/?igsh=bXd2a3V1amNyOWh0" target="_blank" >
              <InstagramIcon className="h-6 w-6 text-blue-500"/>          
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2025 - All right reserved by RoyalOrg Pvt Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
